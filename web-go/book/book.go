package book

import "github.com/Ben-Hilger/website/types"

const (
	ReadBook      = iota
	ReadingBook   = iota
	NotReadBook   = iota
	ReferenceBook = iota
)

func GetBooksRead() []types.BookImage {
	return getBooksWithState(ReadBook)
}

func GetBooksReading() []types.BookImage {
	return getBooksWithState(ReadingBook)
}

func GetBooksNotRead() []types.BookImage {
	return getBooksWithState(NotReadBook)
}

func getBooksWithState(state int) []types.BookImage {
	var booksToReturn []types.BookImage

	for _, book := range Books {
		if book.State == state {
			booksToReturn = append(booksToReturn, book)
		}
	}

	return booksToReturn
}

var Books = []types.BookImage{
	{"assets/img/lean_startup.jpg", "The Lean Startup", ReadBook},
	{"assets/img/ego_is_the_enemy.jpg", "Ego is the Enemy", ReadBook},
	{"assets/img/beyond_disruption.jpg", "Beyond Disruption", ReadBook},
	{"assets/img/continuous_discovery_habits.jpg", "Continuous Discovery Habits", ReadBook},
	{"assets/img/ride_of_a_lifetime.jpg", "Ride of a Lifetime", ReadBook},
	{"assets/img/how_will_you_measure_life.jpg", "How will you measure life?", ReadBook},
	{"assets/img/algorithms_to_live_by.jpg", "Algorithms to live by", ReadBook},
	{"assets/img/engineer_survival_guide.jpg", "Engineer Survival Guide", ReadBook},
	{"assets/img/how_the_mighty_fall.jpg", "How the Mighty Fall", ReadBook},
	{"assets/img/handling_difficult_people.jpg", "Handling Difficult People", ReadBook},
	{"assets/img/after_steve.jpg", "After Steve", ReadBook},
	{"assets/img/the_wealthy_way.jpg", "The Weathly Way", ReadBook},
	{"assets/img/clean_architecture.jpg", "Clean Architecture", ReferenceBook},
	{"assets/img/clean_code.jpg", "Clean Code", ReferenceBook},
	{"assets/img/atomic_habits.jpg", "Atomic Habits", ReadBook},
	{"assets/img/make_your_bed.jpg", "Make your bed", ReadBook},
	{"assets/img/rust_programming_language.jpg", "Rust Progamming Lanugage", NotReadBook},
	{"assets/img/dave_ramsey_total_money_makeover.jpg", "Dave Ramsey Total Money Makeover", ReadBook},
	{"assets/img/the_innovators.jpg", "The Innovators", ReadBook},
	{"assets/img/how_to_win_friends_and_influence_people.jpg", "How to win friends and influence people", ReadBook},
	{"assets/img/invaluable_laws_of_growth.jpg", "15 Invaluable Laws of Growth", ReadBook},
	{"assets/img/the_ideal_team_player.jpg", "The ideal team player", ReadBook},
	{"assets/img/five_dysfunctions_of_a_team.jpg", "Five Dysfunctions of a team", ReadBook},
	{"assets/img/ghost_town_living.jpg", "Ghost Town Living", ReadingBook},
	{"assets/img/breaking_free_from_broke.jpg", "Breaking Free From Broke", ReadBook},
	{"assets/img/millionaire_mission.jpg", "Millionaire Mission", NotReadBook},
	{"assets/img/elon_musk.jpg", "Elon Musk", NotReadBook},
	{"assets/img/gap_and_gain.jpg", "The Gap and Gain", NotReadBook},
	{"assets/img/extreme_ownership.jpg", "Extreme Ownership", NotReadBook},
	{"assets/img/the_toyota_way.jpg", "The Toyota Way", NotReadBook},
	{"assets/img/the_startup_way.jpg", "The Startup Way", NotReadBook},
	{"assets/img/the_5am_club.jpg", "The 5AM Club", NotReadBook},
	{"assets/img/the_amazon_way.jpg", "The Amazon Way", NotReadBook},
}
