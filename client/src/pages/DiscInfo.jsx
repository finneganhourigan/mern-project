import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div class="flex h-[95vh] items-center">
            {!disc ? (
                <h1 class="flex h-screen items-center justify-center text-3xl">
                    Loading...
                </h1>
            ) : (
                <div class="grid grid-cols-12 items-center gap-12">
                    <div class="col-span-1"></div>
                    <img
                        class="col-span-4 mr-12"
                        src={`/assets/${disc.image}`}
                        alt={disc.name}
                    />
                    <div class="col-span-6">
                        <h1 class="text-5xl">{disc.name}</h1>
                        <h3 class="text-lg">{disc.manufacturer}</h3>
                        <br></br>
                        <p class="text-lg">{disc.description}</p>
                        <br></br>
                        <p>Flight Numbers:</p>
                        <div class="grid grid-cols-2 md:grid-cols-4">
                            <p class="flex items-center justify-center border-2 p-2">
                                Speed: {disc.speed}
                            </p>
                            <p class="flex items-center justify-center border-2 p-2">
                                Glide: {disc.glide}
                            </p>
                            <p class="flex items-center justify-center border-2 p-2">
                                Turn: {disc.turn}
                            </p>
                            <p class="flex items-center justify-center border-2 p-2">
                                Fade: {disc.fade}
                            </p>
                        </div>
                    </div>
                    <div class="col-span-1"></div>
                </div>
            )}
        </div>
    );
};

export default DiscInfo;
