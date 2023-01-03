import { matchPlaylists } from "../utils/matchPlaylists"

it('should match returned values from match playlist', () => {
    // Verify if Pop has less inversion
    expect(matchPlaylists(10, 11, 12)).toBe("Pop")

    // Verify if Rock has less inversion
    expect(matchPlaylists(11, 10, 12)).toBe("Rock")

    // Verify if Pagode has less inversion
    expect(matchPlaylists(11, 12, 10)).toBe("Pagode")

    // Verify if all genre has the same inversion value
    expect(matchPlaylists(10, 10, 10)).toBe(null)

    // Verify if Pop inversion is equal to Rock
    expect(matchPlaylists(10, 10, 11)).toBe("Pop e Rock")

    // Verify if Pop inversion is equal to Pagode
    expect(matchPlaylists(10, 11, 10)).toBe("Pop e Pagode")

    // Verify if Rock inversion is equal to Pagode
    expect(matchPlaylists(11, 10, 10)).toBe("Rock e Pagode")
})