const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
}

export default Loading;