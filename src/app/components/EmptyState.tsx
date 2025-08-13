type EmptyStateProps = {
  onReset: () => void;
}

const EmptyState = ({ onReset }: EmptyStateProps) => {
  return (
    <div className="text-center py-8">
      <p className="mb-4">
        No results found! 
        <button 
          onClick={onReset}
          className="ml-2 text-blue-600 hover:text-blue-800 underline"
        >
          Reset your search criteria
        </button>
      </p>
    </div>
  );
}

export default EmptyState;