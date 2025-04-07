import {useCallback} from "react";
import {BASE_URL} from "./constants";

const usePortfolioUpdate = () => {
    const updatePortfolio = useCallback(async (data) => {
        try {
            const response = await fetch(`https://portfoliov2-n5np.onrender.com/api/portfolio/67ec2a0ad2a6c359075109e0`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Unable to Update Portfolio');
            }
        } catch (e) {
            console.log(e);
        }
    }, []);

    return updatePortfolio;
};

export default usePortfolioUpdate;