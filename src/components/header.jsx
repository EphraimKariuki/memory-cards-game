function PageHeader() {
    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="score">
                <label >score:</label>
                <p id="score"></p>
            </div>
            <div className="bestScore">
                <label >BestScore:</label>
                <p id="bestScore"></p>
            </div>
            <h3>Get points by clicking on an image but don't click on any more than once!</h3>
        </header>
    );
}

export default PageHeader;