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
  const [docLoading, setDocLoading] = useState(true);
  async function add(doc) {
    try {
      const response = await databases.createDocument(
        DOCS_DATABASE_ID,
        DOCS_COLLECTION_ID,
        ID.unique(),
        doc
      );
      setDocs((docs) => [response.$id, ...docs].slice(0, 10));
      await init();
    } catch (error) {
      console.log("error in add in docs", error);
    }
  }

  async function remove(id) {
    await databases.deleteDocument(DOCS_DATABASE_ID, DOCS_COLLECTION_ID, id);
    setDocs((docs) => docs.filter((doc) => doc.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
  }

  async function get(id) {
    const response = await databases.getDocument(
      DOCS_DATABASE_ID,
      DOCS_COLLECTION_ID,
      id
    );
    setSingleDoc(response);
    setDocLoading(false);
  }

  async function update(id, data) {
    const response = await databases.updateDocument(
      DOCS_DATABASE_ID,
      DOCS_COLLECTION_ID,
      id,
      data
    );
    setSingleDoc(response);
    await init();
  }

  async function init(userID) {
    const queryArr = [Query.orderDesc("$createdAt"), Query.limit(10)];
    if (userID) queryArr.push(Query.equal("userId", userID));
    const response = await databases.listDocuments(
      DOCS_DATABASE_ID,
      DOCS_COLLECTION_ID,

      [...queryArr]
    );
    setDocs(response.documents);
    setDocLoading(false);
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
