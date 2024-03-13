import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";
export const DOCS_DATABASE_ID = import.meta.env.VITE_DOCS_DATABASE_ID; // Replace with your database ID
export const DOCS_COLLECTION_ID = import.meta.env.VITE_DOCS_COLLECTION_ID; // Replace with your collection ID
const DocsContext = createContext();

export function useDocs() {
  return useContext(DocsContext);
}

export function DocsProvider(props) {
  const [docs, setDocs] = useState([]);
  const [singleDoc, setSingleDoc] = useState([]);
  const [docLoading, setDocLoading] = useState(false);

  async function add(doc) {
    try {
      setDocLoading(true);

      const response = await databases.createDocument(
        DOCS_DATABASE_ID,
        DOCS_COLLECTION_ID,
        ID.unique(),
        doc
      );
      setDocs((docs) => [response.$id, ...docs].slice(0, 10));
      await init(doc.userId);
    } catch (error) {
      console.log("error in add in docs", error);
    }
  }

  async function remove(id) {
    try {
      setDocLoading(true);

      await databases.deleteDocument(DOCS_DATABASE_ID, DOCS_COLLECTION_ID, id);
      setDocs((docs) => docs.filter((doc) => doc.$id !== id));
      setDocLoading(false);
    } catch (error) {
      console.log(error);
      setDocLoading(false);
    }
    // await init(); // Refetch ideas to ensure we have 10 items
  }

  async function get(id) {
    setDocLoading(true);

    const response = await databases.getDocument(
      DOCS_DATABASE_ID,
      DOCS_COLLECTION_ID,
      id
    );
    setSingleDoc(response);
    setDocLoading(false);
  }

  async function update(id, data) {
    try {
      setDocLoading(true);

      const response = await databases.updateDocument(
        DOCS_DATABASE_ID,
        DOCS_COLLECTION_ID,
        id,
        data
      );
      console.log(response);
      setSingleDoc(response);
      await init(response.userId);
      setDocLoading(false);
    } catch (error) {
      console.log(error);
      setDocLoading(false);
    }
  }

  async function init(userID) {
    try {
      setDocLoading(true);

      const queryArr = [Query.orderDesc("$createdAt"), Query.limit(10)];
      if (userID) queryArr.push(Query.equal("userId", userID));
      const response = await databases.listDocuments(
        DOCS_DATABASE_ID,
        DOCS_COLLECTION_ID,

        [...queryArr]
      );
      setDocs(response.documents);
      setDocLoading(false);
    } catch (error) {
      console.log(error);
      setDocLoading(false);
    }
  }

  // useEffect(() => {
  //   init();
  // }, []);
  return (
    <DocsContext.Provider
      value={{
        current: docs,
        singleDoc,
        getDocs: init,
        add,
        get,
        update,
        remove,
        docLoading,
      }}
    >
      {props.children}
    </DocsContext.Provider>
  );
}
