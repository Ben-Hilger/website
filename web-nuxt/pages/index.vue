<template>
    <div class="flex h-100 flex-col items-center justify-between p-2">
        <h1 class="welcome-title welcome-animation">Welcome!</h1>
        <p class="welcome-animation">Thanks for taking the time to visit my website! To begin, take a look at my <a class="text-blue-600" href="/portfolio">portfolio</a>. If you're interested in learning about tihs website, go check out the <a class="text-blue-600" href="/about">about</a> page.</p>
        <div class="flex flex-col items-center w-full">
            <h4 class="text-xl mt-5 font-bold dark:text-white">Books I Am Reading</h4>
            <ImageGallery v-bind:images="getImages(BookState.Reading)"/>
        </div> 
        <div class="flex flex-col items-center mt-1 w-full">
            <h4 class="text-xl font-bold dark:text-white">Books I Plan on Reading</h4>
            <ImageGallery v-bind:images="getImages(BookState.Not_Read)"/>
        </div>  
        <div class="flex flex-col items-center mt-1 w-full">
            <h4 class="text-xl font-bold dark:text-white">Books I Have Read</h4>
            <ImageGallery v-bind:images="getImages(BookState.Read)"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

enum BookState {
    Reference, Read, Reading, Not_Read
}

type Book = {
    src: string,
    alt: string,
    state: BookState
}

const books: Book[] = [
    { src: "/lean_startup.jpg", alt: "The Lean Startup", state: BookState.Read },
    { src: "/ego_is_the_enemy.jpg", alt: "Ego is the Enemy", state: BookState.Read },
    { src: "/beyond_disruption.jpg", alt: "Beyond Disruption", state: BookState.Read },
    { src: "/continuous_discovery_habits.jpg", alt: "Continuous Discovery Habits", state: BookState.Read },
    { src: "/ride_of_a_lifetime.jpg", alt: "Ride of a Lifetime", state: BookState.Read } ,
    { src: "/how_will_you_measure_life.jpg", alt: "How will you measure life?", state: BookState.Read },
    { src: "/algorithms_to_live_by.jpg", alt: "Algorithms to live by", state: BookState.Read },
    { src: "/engineer_survival_guide.jpg", alt: "Engineer Survival Guide", state: BookState.Read },
    { src: "/how_the_mighty_fall.jpg", alt: "How the Mighty Fall", state: BookState.Read },
    { src: "/handling_difficult_people.jpg", alt: "Handling Difficult People", state: BookState.Read },
    { src: "/after_steve.jpg", alt: "After Steve", state: BookState.Read },
    { src: "/the_wealthy_way.jpg", alt: "The Weathly Way", state: BookState.Read },
    { src: "/clean_architecture.jpg", alt: "Clean Architecture", state: BookState.Reference},
    { src: "/clean_code.jpg", alt: "Clean Code", state: BookState.Reference},
    { src: "/atomic_habits.jpg", alt: "Atomic Habits", state: BookState.Reading},
    { src: "/make_your_bed.jpg", alt: "Make your bed", state: BookState.Read },
    { src: "/rust_programming_language.jpg", alt: "Rust Progamming Lanugage", state: BookState.Reading},
    { src: "/dave_ramsey_total_money_makeover.jpg", alt: "Dave Ramsey Total Money Makeover", state: BookState.Read },
    { src: "/the_innovators.jpg", alt: "The Innovators", state: BookState.Read },
    { src: "/how_to_win_friends_and_influence_people.jpg", alt: "How to win friends and influence people", state: BookState.Read },
    { src: "/invaluable_laws_of_growth.jpg", alt: "15 Invaluable Laws of Growth", state: BookState.Read },
    { src: "/the_ideal_team_player.jpg", alt: "The Ideal Team player", state: BookState.Read },
    { src: "/five_dysfunctions_of_a_team.jpg", alt: "Five Dysfunctions of a team", state: BookState.Read },
    { src: "/ghost_town_living.jpg", alt: "Ghost Town Living", state: BookState.Not_Read },
    { src: "/breaking_free_from_broke.jpg", alt: "Breaking Free From Broke", state: BookState.Not_Read },
    { src: "/millionaire_mission.jpg", alt: "Millionaire Mission", state: BookState.Not_Read },
    { src: "/elon_musk.jpg", alt: "Elon Musk", state: BookState.Not_Read },
    { src: "/gap_and_gain.jpg", alt: "The Gap and Gain", state: BookState.Not_Read },
    { src: "/extreme_ownership.jpg", alt: "Extreme Ownership", state: BookState.Not_Read },
    { src: "/the_toyota_way.jpg", alt: "The Toyota Way", state: BookState.Not_Read },
    { src: "/the_startup_way.jpg", alt: "The Startup Way", state: BookState.Not_Read },
    { src: "/the_5am_club.jpg", alt: "The 5AM Club", state: BookState.Not_Read },
    { src: "/the_amazon_way.jpg", alt: "The Amazon Way", state: BookState.Not_Read }
]

function getImages(state: BookState) {
    return books.filter((book: Book) => {
        return book.state === state;
        }).map((book) => { 
            return {src: book.src, alt: book.alt}
        });
        
}


</script>


<style scoped>

.welcome-animation {
    animation: fadeIn 2s;    
}

.welcome-title {
    font-size: 64px;
    margin: 0;
}

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

</style>
