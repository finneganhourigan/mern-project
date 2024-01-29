import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Disc from '../components/Disc';

const DiscInfo = () => {
    const [disc, setDisc] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/api/discs/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDisc(data);
            });
    }, []);

    return (
        <div>
            {!disc ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <Disc
                        key={disc._id}
                        id={disc._id}
                        name={disc.name}
                        manufacturer={disc.manufacturer}
                        speed={disc.speed}
                        glide={disc.glide}
                        turn={disc.turn}
                        fade={disc.fade}
                        category={disc.category}
                        description={disc.description}
                        image={disc.image}
                    />
                </div>
            )}
        </div>
    );
};

export default DiscInfo;
