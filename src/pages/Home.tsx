import { useNavigate } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(3, 7, 18)]">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <ClipboardList className="w-24 h-24 text-white mx-auto" />
          <h2 className="text-4xl font-bold text-white">Todo App</h2>
          <p className="text-gray-400 text-lg">Organize your day</p>
        </div>
        
        <Button 
          onClick={() => navigate("/todo")}
          size="lg"
          className="px-8 py-6 text-lg"
        >
          Go !
        </Button>
      </div>
    </div>
  );
};

export default Home;
