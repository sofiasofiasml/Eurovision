import React from 'react';
import { Header } from './components/Header';
import { WelcomePage } from './pages/WelcomePage';
import { GuessSongPage } from './pages/GuessSongPage';
import { VotingPage } from './pages/VotingPage';
import { ResultsPage } from './pages/ResultsPage';
import { useGame } from './hooks/useGame';

export const App: React.FC = () => {
  const {
    gameState,
    savedStats,
    matchSongs,
    currentSong,
    potentialRoundPoints,
    allVotesAssigned,
    finalStandings,
    correctAnswersCount,
    accuracyPercentage,
    irina12PointsSong,
    twelvePointsSong,
    stageTransitioning,
    setDifficulty,
    setShowHintsByDefault,
    startNewGame,
    registerIntroPlay,
    selectAnswer,
    nextRound,
    assignVote,
    clearAllVotes,
    autoFillRemainingVotes,
    closeTwelvePointsModal,
    finishVoting,
    goToWelcome,
  } = useGame();

  return (
    <div className="esc-app-shell">
      {/* Ambient Eurovision Stage Spotlights & Particles */}
      <div className="esc-stage-backdrop" aria-hidden="true">
        <div className="esc-spotlight spot-left" />
        <div className="esc-spotlight spot-center" />
        <div className="esc-spotlight spot-right" />
        <div className="esc-particles-layer" />
      </div>

      <Header
        screen={gameState.screen}
        quizScore={gameState.quizScore}
        medalUnlocked={savedStats.medalUnlocked}
        onRestart={() => startNewGame()}
        onGoHome={goToWelcome}
      />

      <main className={`esc-main-container ${stageTransitioning ? 'stage-cut' : ''}`}>
        {gameState.screen === 'welcome' && (
          <WelcomePage
            difficulty={gameState.difficulty}
            showHintsByDefault={gameState.showHintsByDefault}
            savedStats={savedStats}
            onSelectDifficulty={setDifficulty}
            onToggleHints={setShowHintsByDefault}
            onStartGame={() => startNewGame()}
          />
        )}

        {gameState.screen === 'guess' && (
          <GuessSongPage
            song={currentSong}
            currentRoundIndex={gameState.currentRoundIndex}
            totalRounds={matchSongs.length}
            deckIds={gameState.deckIds}
            roundResults={gameState.roundResults}
            playCount={gameState.currentPlayCount}
            potentialPoints={potentialRoundPoints}
            selectedAnswer={gameState.selectedAnswer}
            showHintsByDefault={gameState.showHintsByDefault}
            onRegisterPlay={registerIntroPlay}
            onSelectAnswer={selectAnswer}
            onNextRound={nextRound}
          />
        )}

        {gameState.screen === 'voting' && (
          <VotingPage
            songs={matchSongs}
            userVotes={gameState.userVotes}
            roundResults={gameState.roundResults}
            allVotesAssigned={allVotesAssigned}
            twelvePointsSong={twelvePointsSong}
            onAssignVote={assignVote}
            onAutoFillRemaining={autoFillRemainingVotes}
            onClearVotes={clearAllVotes}
            onCloseTwelveModal={closeTwelvePointsModal}
            onFinishVoting={finishVoting}
          />
        )}

        {gameState.screen === 'results' && (
          <ResultsPage
            quizScore={gameState.quizScore}
            correctCount={correctAnswersCount}
            totalRounds={matchSongs.length}
            accuracyPercentage={accuracyPercentage}
            finalStandings={finalStandings}
            internationalJuries={gameState.internationalJuries}
            irina12PointsSong={irina12PointsSong}
            onPlayAgain={() => startNewGame()}
            onChangeDifficulty={goToWelcome}
          />
        )}
      </main>

      <footer className="esc-footer">
        <p>
          🎤 <strong>12 POINTS – EUROVISION CHALLENGE</strong> · Edición Especial{' '}
          <span className="text-gold">Cumpleaños de Irina</span> · United by Music ✨
        </p>
      </footer>
    </div>
  );
};

export default App;
