export enum BookState {
    Reference, Read, Reading, Not_Read
}

export class Book {
    constructor(public id: number, public src: string, public alt: string, public state: BookState) {}
}

export const books: Book[] = [
    new Book(1, "/lean_startup.jpg", "The Lean Startup", BookState.Read),
    new Book(2, "/ego_is_the_enemy.jpg", "Ego is the Enemy", BookState.Read),
    new Book(3, "/beyond_disruption.jpg", "Beyond Disruption", BookState.Read),
    new Book(4, "/continuous_discovery_habits.jpg", "Continuous Discovery Habits", BookState.Read),
    new Book(5, "/ride_of_a_lifetime.jpg", "Ride of a Lifetime", BookState.Read),
    new Book(6, "/how_will_you_measure_life.jpg", "How will you measure life?", BookState.Read),
    new Book(7, "/algorithms_to_live_by.jpg", "Algorithms to live by", BookState.Read),
    new Book(8, "/engineer_survival_guide.jpg", "Engineer Survival Guide", BookState.Read),
    new Book(9, "/how_the_mighty_fall.jpg", "How the Mighty Fall", BookState.Read),
    new Book(10, "/handling_difficult_people.jpg", "Handling Difficult People", BookState.Read),
    new Book(11, "/after_steve.jpg", "After Steve", BookState.Read),
    new Book(12, "/the_wealthy_way.jpg", "The Weathly Way", BookState.Read),
    new Book(13, "/clean_architecture.jpg", "Clean Architecture", BookState.Reference),
    new Book(14, "/clean_code.jpg", "Clean Code", BookState.Reference),
    new Book(15, "/atomic_habits.jpg", "Atomic Habits", BookState.Reading),
    new Book(16, "/make_your_bed.jpg", "Make your bed", BookState.Read),
    new Book(17, "/rust_programming_language.jpg", "Rust Progamming Lanugage", BookState.Not_Read),
    new Book(18, "/dave_ramsey_total_money_makeover.jpg", "Dave Ramsey Total Money Makeover", BookState.Read),
    new Book(19, "/the_innovators.jpg", "The Innovators", BookState.Read),
    new Book(20, "/how_to_win_friends_and_influence_people.jpg", "How to win friends and influence people", BookState.Read),
    new Book(21, "/invaluable_laws_of_growth.jpg", "15 Invaluable Laws of Growth", BookState.Read),
    new Book(22, "/the_ideal_team_player.jpg", "The ideal team player", BookState.Read),
    new Book(23, "/five_dysfunctions_of_a_team.jpg", "Five Dysfunctions of a team", BookState.Read),
    new Book(24, "/ghost_town_living.jpg", "Ghost Town Living", BookState.Not_Read),
    new Book(25, "/breaking_free_from_broke.jpg", "Breaking Free From Broke", BookState.Reading),
    new Book(26, "/millionaire_mission.jpg", "Millionaire Mission", BookState.Not_Read),
    new Book(27, "/elon_musk.jpg", "Elon Musk", BookState.Not_Read),
    new Book(28, "/gap_and_gain.jpg", "The Gap and Gain", BookState.Not_Read),
    new Book(29, "/extreme_ownership.jpg", "Extreme Ownership", BookState.Not_Read),
    new Book(30, "/the_toyota_way.jpg", "The Toyota Way", BookState.Not_Read),
    new Book(31, "/the_startup_way.jpg", "The Startup Way", BookState.Not_Read),
    new Book(32, "/the_5am_club.jpg", "The 5AM Club", BookState.Not_Read),
    new Book(33, "/the_amazon_way.jpg", "The Amazon Way", BookState.Not_Read)
]


