Chương 1 - Đại số mệnh đề
===============================
##I. Các phép toán và bảng chân lý
###1. Phép phủ định (&not;, not)
 | A   | &not; A|
 |:---:|:------:|
 |  T  |    F   |   
 |  F  |    T   |

- Như vậy nghĩa là khi A nhận giá trị T thì &not; A nhận giá trị F, và khi A nhận giá trị F thì &not; A nhận giá trị T.

###2. Phép và (&and;, and, hội)
 | A   |  B     |   A &and; B|
 |:---:|:------:|:----------:|
 |  T  |    T   |       T    |
 |  T  |    F   |       F    |
 |  F  |    T   |       F    |
 |  F  |    F   |       F    |
 
 - Mệnh đề A &and; B nhận giá trị T khi và chỉ khi A và B nhận giá trị T
 
 ###3. Phép hay (&or;, or, tuyển)
  | A   |  B     |   A &or; B |
  |:---:|:------:|:----------:|
  |  T  |    T   |       T    |
  |  T  |    F   |       T    |
  |  F  |    T   |       T    |
  |  F  |    F   |       F    |
  
  - Mệnh đề A &or; B nhận giá trị F khi và chỉ khi A và B đều F
  
  ###4. Phép kéo theo (&rarr;)
  | A   |  B     | A &rarr; B |
  |:---:|:------:|:----------:|
  |  T  |    T   |       T    |
  |  T  |    F   |       F    |
  |  F  |    T   |       T    |
  |  F  |    F   |       T    |  
  
  - Mệnh đề A &rarr; B nhận giá trị F khi và chỉ khi mệnh đề A (giả thuyết) và B(kết luận)  F
  - Trong một vài trường hợp mệnh đề "Nếu A thì B" được sử dụng nhưng không quan tâm tới các giá trị chân lý của các mệnh đề 1 cách đầy đủ ví dụ như:
    + Nếu `1 + 2 = 3 thì Paris là thủ đô nước Pháp` 
  - Chúng ta nhận thấy giá trị chân lý của mệnh đề trên là T nhưng với mệnh đề A không có liên quan gì đến mệnh đề B. Vì vậy, khi sử dụng phép kéo theo
    chúng ta phải chú ý đến mối quan hệ giữa các mệnh đề
  - Trong thực tế chúng ta có thể sử dụng mệnh đề nếu A thì B như sau: `Nếu bạn không bệnh, bạn sẽ không nghỉ học`. Ví dụ cho ta thấy mệnh đề
  A &rarr; B tương đương với &not; A &rarr; &not; B
  
  ###5. Phép tương đương (&harr;)
  | A   |  B     | A &harr; B |
  |:---:|:------:|:----------:|
  |  T  |    T   |       T    |
  |  T  |    F   |       F    |
  |  F  |    T   |       F    |
  |  F  |    F   |       T    |  
  
  - Mệnh đề A &harr; B nhận giá trị T khi và chỉ khi id cùng giá trị
    
##II. Công thức mệnh đề
  - Công thức mệnh đề là mệnh đề được lập nên từ các chữ cái La-tinh A, B, C,... và kể các các chữ cái La-tinh có chỉ số A<sub>1</sub>, B<sub>1</sub>, C<sub>1</sub> nhờ các phép toán logic
  - Chúng ta định nghĩa công thức mệnh đề bằng cách đệ quy sau:
    + Tất cả các chữ cái La-tinh, kể cả các chữ cái La-tinh có chữ số đều là công thức.
    + Nếu &Auml; và &bernou; là các công thức thì (&not; &Auml;), (&Auml; &or; &bernou;), (&Auml; &and; &bernou;), (&Auml; &rarr; &bernou;), (&Auml; &harr; &bernou;) cũng là công thức.
    + Một biểu thức được gọi là công thức nếu nó được lập từ cơ sở 1 và cơ sở 2.
  - Mỗi một phân bố các giá trị chân lý của các biến có trong công thức cho ta 1 giá trị chân lý của công thức. Do vậy, mỗi công thức mệnh đề xác định một hàm đại số logic nào đó.
  Hàm này được xác định dựa vào bảng chân lý của công thức đã cho
  - Chúng ta có 2 phương pháp lập bảng chân lý: Lập bảng chân lý đầy đủ và bảng chân lý thu gọn
      + a. Lập bảng chân lý đầy đủ: Ví dụ tìm hàm đại số logic tương ứng cho công thức &Auml; = (((&not; A)&or; B) &rarr; C)
          *  Lâp bảng chân lý đầy đủ:
          
                |   A   |   B   |   C   |    ¬A     |   (¬A) ∨ B    |    A      |
                |:-----:|:-----:|:-----:|:---------:|:-------------:|:---------:|
                |T      |T      |T      |   F       |       T       |      T    |
                |T      |T      |F      |   F       |        T      |      F    |
                |T      |F      |T      | F         | F             |       T   |
                |T      |F      |F      | F         | F             | T         |
                |F      |   T   |T      | T         | T             |    T      |
                |F      |T      |F      |T          |T              |F          |
                |F      |F      |T      |T          | T             | T         |
                |F      |F      |F      |T          |T              |   F       |
          
          * Như vậy chúng ta đã xác định được hàm đại số logic 3 biến f: {T, F}<sup>3</sup> &rarr; {T, F} dựa vào bảng chân lý của &Auml; như sau:
               1. f(T, T, T) = T 
               2. f(F, T, T) = T
               3. f(T, T, F) = F 
               4. f(F, T, F) = F
               5. f(T, F, T) = T 
               6. f(F, F, T) = T
               7. f(T, F, F) = T 
               8. f(F, F, F) = F
               
      + b. Lập bảng chân trị thu gọn: Ví dụ: Lập bảng chân trị cho công thức sau: &Auml; = (A ↔ B) → ((¬A) ∧ B)
          * Lập bảng chân trị thu gọn như sau:
          
              |   (A  |   &harr;   |   B)  |    &rarr;  |    (( &not;A)      |        &and;     |    B)      |
              |:-----:|:-----:|:-----:|:------:|:-------------:|:------------:|:----------:|
              |   T   |   T   |   T   |    F   |       F       |       F      |     T      |
              |   T   |   F   |   F   |    T   |       F       |        F     |     F      |
              |   F   |   F   |   T   |    T   |       T       |       T      |   T        |
              |   F   |   T   |   F   |   F    |       T       |       F      |    F       |
          
      + c. Tính ưu tiên của các phép tính:
            1. &not; | 2. &and; | 3. &or;  |  4. &rarr;  |  5. &harr;
            trong đó các phép toán &rarr;, &harr; xuất hiện nhiều lần thì ta lập ngoặc từ trái sang phải. Ví dụ A &rarr; B &rarr; C.
            Thì lập ngoặc đúng sẽ như sau: ((A &rarr; B) &rarr; C)
      
##III. Một số định nghĩa
####1. Hàm logic đại số:
         