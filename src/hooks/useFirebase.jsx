import { collection, getDocs, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import db from '../services/firebase';
import { useState } from "react";
import { GlobalProvider } from "../context/GlobalContext";

const useFirebase = () => {

    const [items, setItems] = useState([]);
    const [individual, setIndividual] = useState({});
    const { setLoad } = GlobalProvider();

    const getData = async () => {
        setLoad(true);
        try {
            const data = collection(db, 'products');
            const col = await getDocs(data);
            const response = col.docs.map(doc => doc = { id: doc.id, ...doc.data() });
            setItems(response);
            setLoad(false);
        } catch (error) {
            console.log(error);
        };
    };

    const getIndividualData = async ({ id }) => {
        setLoad(true);
        try {
            const document = doc(db, 'products', id);
            const response = await getDoc(document);
            let result = response.data();
            setIndividual({ id: response.id, ...result });
            setLoad(false);
        } catch (error) {
            console.log(error);
        };
    };

    const generateOrder = async ({ datos }) => {
        setLoad(true);
        try {
            const col = collection(db, 'orders');
            const order = await addDoc(col, datos);
            setLoad(false);
            console.log(order.id);
        } catch (error) {
            console.log(error);
        };
    };

    const fetchUpdateDoc = async ({ id }) => {
        const orderDoc = doc(db, 'products', id);
        try {
            await updateDoc(orderDoc, { precio: 8000 })
            console.log('Se actualizó correctamente');
        } catch (error) {
            console.log(error);
        };
    };

    return {
        items,
        individual,
        getData,
        getIndividualData,
        generateOrder,
        fetchUpdateDoc
    };
};

export default useFirebase;