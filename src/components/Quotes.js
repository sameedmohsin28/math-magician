import { useEffect, useState } from 'react';

import styles from './Quotes.module.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const getData = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: { 'X-Api-Key': 'XHrTP6DOL5nJ3iiJTwrfMg==OpEmLQCgPTqaBmcs' },
          contentType: 'application/json',
        });
        const response = await getData.json();
        setQuote(response);
      } catch {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (hasError) return <div>Failed to load data from API</div>;

  return (
    <>
      {quote.map((item) => (
        <div key={item.author} className={styles.quotes}>
          <p>{item.quote}</p>
          <span>
            &quot;
            {item.author}
            &quot;
          </span>
        </div>
      ))}
    </>
  );
};

export default Quotes;
