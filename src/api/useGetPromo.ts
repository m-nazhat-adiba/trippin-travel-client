import { Promo } from "@/types";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${APP_URL}/promos`;
const APP_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useGetPromo = (): {
  data: Promo[];
  error: any;
  loading: boolean;
} => {
  const [data, setData] = useState<Promo[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(url, APP_KEY);

        const promos: Promo[] = response.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl,
          terms_condition: item.terms_condition,
          promo_code: item.promo_code,
          promo_discount_price: item.promo_discount_price,
          minimum_claim_price: item.minimum_claim_price,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));
        console.log("getPromo", promos);
        setData(promos);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};
