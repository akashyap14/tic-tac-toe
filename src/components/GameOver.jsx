export default function GameOver({ winner,onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} You won</p>}
            {!winner && <p>"It`s a draw!"</p>}
            <p><button onClick={onRestart}>Re-match</button></p>
        </div>
    )
}