Bài 1 các khái niệm cơ bản
=================================
###I. Định nghĩa đồ thị (Graph)
  - Là 1 cấu trúc rời rạc gồm các đỉnh và các cạnh nối với các đỉnh đó. Được mô tả hình thức:
            G = (V, E)
        V gọi là tập các đỉnh (Vertices) và E là tập các cạnh (Edges). Có thể coi E là tập các cặp (u,v) với u, v là hai đỉnh của V.
  - Phân loại đồ thị:
       + Đồ thị G được xem là đơn đồ thị nếu giữa 2 đỉnh u, v của V có nhiều nhất 1 cạnh thuộc E nối từ u tới v
       + Đồ thị G được xem là đa đồ thị nếu giữa 2 đỉnh u, v của V có nhiều hơn 1 cạnh thuộc E nối từ u tới v
       + Đồ thị G là vô hướng nếu các cạnh trong G đều không quan tâm thứ tự 2 đầu mút. (u,v) là (v,u)
       + Đồ thị G là vô hướng nếu các cạnh trong G đều quan tâm thứ tự 2 đầu mút. (u,v) khác (v,u). Trong đồ thị vô hướng ta có thể xem (u,v) và (v,u)
       là 2 cung
    
###II. Các khái niệm
   - Cạnh liên thuộc, đỉnh kề, bậc
     + Đối với đồ thị vô hướng G = (V, E). Xét 1 cạnh e &isin; E, nếu e = (u, v) thì ta nói hai đỉnh u và v là kề nhau (adjacent) và cạnh
    e này liên thuộc (incident) với đỉnh u và đỉnh v.
     + Với 1 đỉnh v trong đồ thị, ta định nghĩa bậc (degree) của v, kí hiệu là deg(v) là số cạnh liên thuộc với v. Dể thấy rằng trên đơn đồ
    thị thì số cạnh liên thuộc với v cũng là số đỉnh kề với v.
    
   - Định lý: Giả sử: G = (V, E) là đồ thị vô hướng với m cạnh, khi đó tổng tất các bậc đỉnh trong V sẽ bằng 2m
     + Chứng minh: Khi lấy tổng tất cả các bậc đỉnh tức là mỗi cạnh e = (u, v) bất kì sẽ được tính một lần trong deg(u) và một lần trong deg(v). TỪ đó
     suy ra kết quả
     + Hệ quả: Trong đồ thị vô hướng, số đỉnh bậc lẻ là số chẵn
     
   - ĐỐi với đồ thị có hướng G =(V, E). 
     + Xét 1 cung e &isin; E, nếu cạnh e = (u, v) thì ta nói u nối tới v và v nối từ u, cung e là đi ra khỏi đỉnh u
      và đi vào đỉnh v. Đỉnh u khi đó được gọi là đỉnh đầu, đỉnh v được gọi là đỉnh cuối của cung e.
     + Với mỗi đỉnh v trong đồ thị có hướng, ta đinh nghĩa: Bán bậc ra của v kí hiệu deg<sup>+</sup>(v) là số cung đi ra khỏi nó;Bán bậc vào của v 
      kí hiệu deg<sup>-</sup>(v) là số cung đi vào đỉnh đó.
      
   - Định lý: Giả sử G = (V, E) là đồ thị có hướng với m cung, khi đó tổng tất cả casdc bán bậc ra của các đỉnh bằng tổng tất cả các bán bậc vào và bằng m
      + Chứng minh: Khi lấy tất cả các bán bậc ra hay bán bậc vào, mỗi cung (u, v) bất kỳ sẽ được tính đúng 1 lần trong deg<sup>+</sup>(u) và cũng được tính đúng 1
      lần trong deg<sup>-</sup>(v)
        