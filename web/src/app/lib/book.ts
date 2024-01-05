export enum BookState {
    Reference, Read, Reading, Not_Read
}

export class Book {
    constructor(public id: number, public src: string, public alt: string, public state: BookState) {}
}

export const books: Book[] = [
    new Book(1, "https://storage.googleapis.com/hilger-personal-books/lean_startup.jpg", "The Lean Startup", BookState.Read),
    new Book(2, "https://storage.googleapis.com/hilger-personal-books/ego_is_the_enemy.jpg", "Ego is the Enemy", BookState.Read),
    new Book(3, "https://storage.googleapis.com/hilger-personal-books/beyond_disruption.jpg", "Beyond Disruption", BookState.Read),
    new Book(4, "https://storage.googleapis.com/hilger-personal-books/continuous_discovery_habits.jpg", "Continuous Discovery Habits", BookState.Read),
    new Book(5, "https://storage.googleapis.com/hilger-personal-books/ride_of_a_lifetime.jpg", "Ride of a Lifetime", BookState.Read),
    new Book(6, "https://storage.googleapis.com/hilger-personal-books/how_will_you_measure_life.jpg", "How will you measure life?", BookState.Read),
    new Book(7, "https://storage.googleapis.com/hilger-personal-books/algorithms_to_live_by.jpg", "Algorithms to live by", BookState.Read),
    new Book(8, "https://storage.googleapis.com/hilger-personal-books/engineer_survival_guide.jpg", "Engineer Survival Guide", BookState.Read),
    new Book(9, "https://storage.googleapis.com/hilger-personal-books/how_the_mighty_fall.jpg", "How the Mighty Fall", BookState.Read),
    new Book(10, "https://storage.googleapis.com/hilger-personal-books/handling_difficult_people.jpg", "Handling Difficult People", BookState.Read),
    new Book(11, "https://storage.googleapis.com/hilger-personal-books/after_steve.jpg", "After Steve", BookState.Read),
    new Book(12, "https://storage.googleapis.com/hilger-personal-books/the_wealthy_way.jpg", "The Weathly Way", BookState.Read),
    new Book(13, "https://storage.googleapis.com/hilger-personal-books/clean_architecture.jpg", "Clean Architecture", BookState.Reference),
    new Book(14, "https://storage.googleapis.com/hilger-personal-books/clean_code.jpg", "Clean Code", BookState.Reference),
    new Book(15, "https://storage.googleapis.com/hilger-personal-books/atomic_habits.jpg", "Atomic Habits", BookState.Not_Read),
    new Book(16, "https://storage.googleapis.com/hilger-personal-books/make_your_bed.jpg", "Make your bed", BookState.Reading),
    new Book(17, "https://storage.googleapis.com/hilger-personal-books/rust_programming_language.jpg", "Rust Progamming Lanugage", BookState.Reading),
    new Book(18, "https://storage.googleapis.com/hilger-personal-books/dave_ramsey_total_money_makeover.jpg", "Dave Ramsey Total Money Makeover", BookState.Read),
    new Book(19, "https://storage.googleapis.com/hilger-personal-books/the_innovators.jpg", "The Innovators", BookState.Read),
    new Book(20, "https://storage.googleapis.com/hilger-personal-books/how_to_win_friends_and_influence_people.jpg", "How to win friends and influence people", BookState.Read),
    new Book(21, "https://storage.googleapis.com/hilger-personal-books/invaluable_laws_of_growth.jpg", "15 Invaluable Laws of Growth", BookState.Read),
    new Book(22, "https://storage.googleapis.com/hilger-personal-books/the_ideal_team_player.jpg", "The ideal team player", BookState.Read),
    new Book(23, "https://storage.googleapis.com/hilger-personal-books/five_dysfunctions_of_a_team.jpg", "Five Dysfunctions of a team", BookState.Read),
    new Book(24, "https://storage.googleapis.com/hilger-personal-books/ghost_town_living.jpg", "Ghost Town Living", BookState.Not_Read),
    new Book(25, "https://storage.googleapis.com/hilger-personal-books/breaking_free_from_broke.jpg", "Breaking Free From Broke", BookState.Not_Read),
    new Book(24, "https://storage.googleapis.com/hilger-personal-books/millionaire_mission.jpg", "Millionaire Mission", BookState.Not_Read)
]


