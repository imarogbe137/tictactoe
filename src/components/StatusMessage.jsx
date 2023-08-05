const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          The winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return <div>DRAW</div>;
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          The Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default StatusMessage;
