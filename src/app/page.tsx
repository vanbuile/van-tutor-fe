import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Trang chủ Khóa học</h1>
      <p>Chào mừng bạn!</p>
      {/* Đây là nút bạn vừa thêm */}
      <Button>Bắt đầu học</Button>

      {/* Bạn có thể thử các biến thể khác */}
      <Button variant="outline" size="lg" className="mt-4 ml-2">Nút Khác</Button>
    </div>
  );
}
