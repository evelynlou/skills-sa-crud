import React, { useState, useEffect, useRef } from 'react';

const Feed = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState()


    const fetchData = async () => {
        setError(null);

        try {
            const response = await fetch(`http://localhost:8000/user/findAll/${page}`);
            const data = await response.json();
            console.log(data);

            if (data.length === 0) {
                console.log("Final da página");
            }
            else if (data.length === 20) {
                console.log("Próxima página")
                setDataLength(data.length);
                setItems(prevItems => [...prevItems, ...data]);
                setPage(prevPage => prevPage + 1);
            }
            else if (dataLength != data.length) {
                setDataLength(data.length);
                setItems(prevItems => [...prevItems, ...data])
            }
            else if (dataLength == data.length) {
                console.log("Nem sei o que isso deveria fazer")
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <div>
            <ul>
                {items.map(item => (
                    <React.Fragment key={item.id_user}>
                        <li>{item.username}</li>
                        <li>{item.status}</li>
                        <li>{item.firstName}</li>
                        <li>{item.lastName}</li>
                        <li>{item.email}</li>
                        <li>{item.description}</li>
                        <li>{item.birthDate}</li>
                        <li>{item.state}</li>
                        <br />
                    </React.Fragment>
                ))}
            </ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
};

export default Feed;