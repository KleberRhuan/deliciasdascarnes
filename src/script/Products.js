import db from './Firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const getProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);

        const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
    }
};

