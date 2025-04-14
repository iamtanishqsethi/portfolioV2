import {useCallback} from "react";
import {BASE_URL} from "./constants";
import {toast} from 'react-hot-toast'

const usePortfolioUpdate = () => {
    const updatePortfolio = useCallback(async (data) => {
        try {
            const response = await fetch(`${BASE_URL}/api/portfolio/67ec2a0ad2a6c359075109e0`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Unable to Update Portfolio');
            }
            toast.success('Updated Portfolio');
        } catch (e) {
            console.log(e);
            toast.error(`Error Updating Portfolio: ${e}`);
        }
    }, []);

    return updatePortfolio;
};

export default usePortfolioUpdate;