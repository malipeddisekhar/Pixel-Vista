import { useEffect, useState } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError("The photo list could not be loaded. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();

    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}