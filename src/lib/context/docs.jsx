import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";
export const DOCS_DATABASE_ID = "65d2f6fb264ab7680649"; // Replace with your database ID
export const DOCS_COLLECTION_ID = "65d2f757daec78d98305"; // Replace with your collection ID
const DocsContext = createContext();

export function useDocs() {
    return useContext(DocsContext);
}

export function DocsProvider(props) {
    const [docs, setDocs] = useState([])
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
            console.log("error in add in docs", error)
        }
    }

    async function remove(id) {
        await databases.deleteDocument(DOCS_DATABASE_ID, DOCS_COLLECTION_ID, id);
        setDocs((docs) => docs.filter((doc) => doc.$id !== id));
        await init(); // Refetch ideas to ensure we have 10 items
    }

    async function get(id) {
        const response = await databases.getDocument(DOCS_DATABASE_ID, DOCS_COLLECTION_ID, id)
        setDocs(response.$id)
    }

    async function init() {
        const response = await databases.listDocuments(
            DOCS_DATABASE_ID,
            DOCS_COLLECTION_ID,
            [Query.orderDesc("$createdAt"), Query.limit(10)]
        );
        setDocs(response.documents);
    }

    useEffect(() => {
        init();
    }, []);
    return (
        <DocsContext.Provider value={{ current: docs, add, remove, get }}>
            {props.children}
        </DocsContext.Provider>
    );
}