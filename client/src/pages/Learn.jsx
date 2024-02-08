const learn = () => {
    return (
        <div class="px-[5%] pb-12 sm:px-[10%] md:px-[20%] lg:px-[25%]">
            <h1 class="py-4 text-3xl font-bold">Flight Ratings</h1>
            <div class="xl:flex">
                <div class="flex items-center">
                    <p class="py-4">
                        A disc's flight can be visualized as an S-curve,
                        starting with the initial release, moving to the right
                        at high speed (for right-handed backhand throws*), and
                        then curving back to the left as it slows down. This
                        generalized flight path is influenced by a disc's
                        individual characteristics, represented by its
                        <em> flight numbers</em>.
                    </p>
                </div>
                <img
                    class="mx-auto w-[70%] xl:ml-10 xl:w-[40%]"
                    src="/assets/flightPaths/standardFlight.png"
                />
            </div>
            <p class="py-4 text-sm text-gray-300">
                *The standard for describing a disc's flight is done assuming
                that the throw is a right-handed backhand (RHBH) throw. Note
                that a left-handed forehand throw shares the same flight path as
                RHBH. Right-handed forehand and left-handed backhand throws have
                a mirrored flight path due to the disc spinning the other
                direction.
            </p>
            <ul class="list-disc py-4 pl-6">
                <li>
                    <em>Speed</em> - Indicates the minimum speed required to
                    achieve the disc's intended flight characteristics. Higher
                    speeds generally require more power to achieve.
                </li>
                <li>
                    <em>Glide</em> - Measures the disc's ability to stay in the
                    air. Higher glide discs tend to stay aloft longer.
                </li>
                <li>
                    <em>Turn</em> - Describes the disc's tendency to turn to the
                    right during the initial part of its flight. Negative values
                    indicate more turn.
                </li>
                <li>
                    <em>Fade</em> - Represents the disc's tendency to fade to
                    the left at the end of its flight. Positive values indicate
                    more fade.
                </li>
            </ul>

            {/* ------------------------------------------------------------------------------------------------- */}

            <h1 class="py-4 text-3xl font-bold">Stability</h1>
            <p class="py-4">
                The relationship between a disc's turn and fade describe its
                <em> stability</em> and subsequent flight path.
            </p>

            <p class="py-4 text-lg font-bold">Overstable Discs</p>
            <div class="xl:flex">
                <p class="flex items-center pb-4">
                    These discs have little turn and a high positive fade
                    rating. They resist turning to the right (RHBH) during the
                    initial part of the flight and exhibit a strong leftward
                    fade at the end of the flight. Overstable discs are ideal
                    for handling windy conditions, making accurate approaches,
                    or executing shots that require a reliable leftward finish.
                </p>
                <img
                    class="mx-auto w-[70%] xl:ml-10 xl:w-[40%]"
                    src="/assets/flightPaths/overstableFlight.png"
                />
            </div>

            <p class="py-4 text-lg font-bold">Neutral Discs</p>
            <div class="xl:flex">
                <p class="flex items-center pb-4">
                    These discs have a balanced combination of turn and fade
                    ratings, often close to zero or slightly negative Turn and
                    Fade. They tend to fly straight with minimal deviation from
                    the intended line, making them versatile and reliable for a
                    variety of shots and skill levels.
                </p>
                <img
                    class="mx-auto w-[70%] xl:ml-10 xl:w-[40%]"
                    src="/assets/flightPaths/neutralFlight.png"
                />
            </div>

            <p class="py-4 text-lg font-bold">Understable Discs</p>
            <div class="xl:flex">
                <p class="flex items-center pb-4">
                    These discs have a high negative Turn rating and a low
                    positive fade rating. When thrown at the right speed, they
                    will turn to the right (RHBH) during the initial part of the
                    flight, then gradually come back to the left as they slow
                    down, exhibiting minimal fade.
                </p>
                <img
                    class="mx-auto w-[70%] xl:ml-10 xl:w-[40%]"
                    src="/assets/flightPaths/understableFlight.png"
                />
            </div>

            <p class="py-4">
                Understanding the stability of discs and how Turn and Fade
                influence their flight paths is essential for selecting the
                right discs for different shot types, skill levels, and course
                conditions.
            </p>

            {/* ------------------------------------------------------------------------------------------------- */}

            <h1 class="py-4 text-3xl font-bold">Essential Discs to Throw</h1>
            <p class="py-4 text-lg font-bold">Distance Driver</p>
            <p class="pb-4">
                Everyone wants to throw far, but if you're a beginner, you
                should stay away from distance drivers until you're more
                experienced. This is because your ability to throw a disc at
                high speeds will come predominantly from good form, not sheer
                strength. Without the ability to throw a disc as fast as it's
                designed, you're not going to get a full flight out of the disc.
                However unintuitive, throwing a slower disc will yield you
                greater distance if you can get a full flight out of it.
            </p>

            <p class="py-4 text-lg font-bold">Understable Fairway Driver</p>
            <p class="pb-4">
                This will likely by your disc for longer distances. Understable
                discs are great for beginners or players with less power. The
                ease in turning the disc over often leads to a full flight and
                greater distance.
            </p>

            <p class="py-4 text-lg font-bold">Straight-flying Midrange</p>
            <p class="pb-4">
                These are versatile discs suitable for a variety of distances
                and shot shapes, making them essential for beginners to practice
                different throwing techniques.
            </p>

            <p class="py-4 text-lg font-bold">Overstable Approach Disc</p>
            <p class="pb-4">
                With a predictable faded at the end of the flight, this disc is
                reliable under windy conditions and provides a consistent flight
                path. Approach discs will often be slow-speed, preventing them
                from skipping far from their initial landing zone.
            </p>

            <p class="py-4 text-lg font-bold">Putter</p>
            <p class="pb-4">
                As a beginner, the putter you choose won't significantly impact
                your putting performance. Find one that feels comfortable in
                your hand and focus on practicing your form. <em>Beaded </em>
                putters have a small bead around the rim, which some players
                prefer for added grip and stability.
            </p>
        </div>
    );
};

export default learn;
