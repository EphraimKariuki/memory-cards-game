function PageHeader() {
    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="score scoreDiv">
                <div >score:</div>
                <div id="score">0</div>
            </div>
            <div className="bestScore scoreDiv">
                <div >BestScore:</div>
                <div id="bestScore">0</div>
            </div>
            <h3>Get points by clicking on an image but don't click on any more than once!</h3>
        </header>
    );
}

export default PageHeader;