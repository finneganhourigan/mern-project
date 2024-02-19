import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DiscInfo = () => {
    const [disc, setDisc] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://disc-golf-app-backend.onrender.com/api/discs/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDisc(data);
            });
    }, []);

    return (
        <div class="flex items-center lg:h-[95vh]">
            {!disc ? (
                <h1 class="flex h-screen items-center justify-center text-3xl">
                    Loading...
                </h1>
            ) : (
                <div class="mx-8 flex flex-col items-center lg:mx-0 lg:grid lg:grid-cols-12 lg:gap-12">
                    <div class="flex flex-col items-center lg:hidden">
                        <h1 class="text-5xl">{disc.name}</h1>
                        <h3 class="text-lg">{disc.manufacturer}</h3>
                    </div>

                    <div class="col-span-1"></div>

                    <img
                        class="my-4 h-auto w-3/4 lg:col-span-4 lg:mr-12 lg:w-auto"
                        src={`/assets/discs/${disc.image}`}
                        alt={disc.name}
                    />

                    <div class="lg:col-span-6">
                        <div class="hidden lg:inline-block">
                            <h1 class="text-5xl">{disc.name}</h1>
                            <h3 class="text-lg">{disc.manufacturer}</h3>
                            <br></br>
                        </div>
                        <p class="whitespace-pre-line text-lg">
                            {disc.description}
                        </p>
                        <br></br>
                        <p>Flight Numbers:</p>
                        <div class="grid grid-cols-2 lg:grid-cols-4">
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
