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
  - Định nghĩa: 
    * Một hàm đại số logic n biến là 1 ánh xạ của tập hợp {T, F}<sup>n</sub> vào {T, F}
    * Lớp các hàm logic đại số nhận 2 giá trị {T, F} (hoặc (0,1)) cùng với các biến của nó được kí kiệu là lớp hàm P<sub>2</sub>
  - Ta dể dàng nhận thấy rằng, số các hàm đại số logic n biến là bằng 2<sup>2<sup>n</sup></sup>, vì rằng với n biến ta có 2<sup>n</sup> bộ phân bố các giá 
  trị chân lý {T, F} và mỗi một bộ như vậy tương ứng một giá trị {T, F}
  - Ví dụ. Ta xét lớp hàm P<sub>2</sub> một biến gồm có 2<sup>2<sup>1</sup></sup> hàm được cho theo bảng sau đây:
  
     |    X\f       |  f<sub>1</sub> |  f<sub>2</sub>  |    f<sub>3</sub>   |   f<sub>4</sub>  |
     |:------------:|:--------:|:---------:|:-------------:|:-------------:|
     |  T           |   T      |    T      |    F          |    F          |
     |  F           |   T      |    F      | T             |    F          |
     
     trong đó f<sub>2</sub>(x) = x; f<sub>3</sub>(x) = &not;x; 
        
  - Ta biết mỗi một công thức mệnh đề tương ứng với 1 hàm đại số logic, vì rằng:
    * Thứ nhất, tập hợp tất cả các biến mệnh đề là đếm được. 
    * Thứ 2 là nếu 1 công thức mệnh đề nào đó có chứa các biến i<sub>1</sub>, i<sub>2</sub>,..., i<sub>n</sub> (i<sub>1</sub> < i<sub>2</sub> < ... < i<sub>n</sub>)
    trong tập kể được ở trên thì khi đó tương ứng ta có thể lập được 1 hàm đại số logic với các biến x<sub>i<sub>1</sub></sub>, x<sub>i<sub>2</sub></sub>,..., x<sub>i<sub>n</sub></sub>
   
  - Các ví dụ:
    * Với công thức A &rarr; B thì hàm đại số logic tương ứng là:
      
      |   x<sub>1</sub>     |       x<sub>2</sub>        |           f(x<sub>1</sub>, x<sub>2</sub>)       |
      |:-------------------:|:-------------------------:|:---------------------------------------------:|
      |     T   |   T   |   T   |
      |     T   |   F   |   F   |
      |     F   |   T   |   T   |
      |     F   |   F   |   T   |
      
      
####2. Sự đồng nhất đúng - đồng nhất sai
  - Định nghĩa 1:
    * Một công thức mệnh đề được gọi là đồng nhất đúng (hay hằng đúng) nếu nó nhận giá trị đúng với tất cả các phép thế các giá trị chân lý của các biến có mặt trong công thức
    * Vậy chúng ta có thể nói rằng một công thức mệnh đề là đồng nhất đúng, khi và chỉ khi hàm đại số logic tương ứng của nó nhận toàn giá trị đúng, 
    hoặc cột cuối cùng của bảng chân lý của công thức đều là đúng.
    
  - Định nghĩa 2:
    * Nếu công thức (&Auml; &rarr; &bernou;) là đồng nhất đúng thì khi đó &Auml; được gọi là logic kéo theo &bernou; hoặc  &bernou; là logic kéo theo từ &Auml;
    * Ví dụ: A &and; (A &rarr; B) logic kéo theo B.
       + Chúng ta chỉ cần chứng minh &Auml; = (A &and; (A &rarr; B) &rarr; B) là đồng nhất đúng
  
  - Định nghĩa 3:
    * Hai công thức &Auml; và &bernou; được gọi là logic tương đương nếu công thức (&Auml; &harr; &bernou;) là đồng nhất đúng.
    * Ví dụ: Chứng minh A &rarr; B và (&not; A) &or; B là 2 công thức logic tương đương
        + Chúng ta chỉ cần  chứng minh &Auml; = (A &rarr; B) &harr; ((&not; A) &or; B) là đồng nhất đúng
  - Bảng công thức tương đương:
  
    * Giao hoán:
        + A &and; B  &equiv; B &and; A 
        + A &or; B &equiv; B &or; A 
        
    * Kết hợp:
        + A &and; (B &and; C) &equiv; (A &and; B) &and; C
        + A &or; (B &or; C) &equiv; (A &or; B) &or; C
        
    * Luật phân phối hai bên với &and; và &or;
        + A &and; (B &or; C) &equiv; (A &and; B) &or; (A &and; C)
        + A &or; (B &and; C) &equiv; (A &or; B) &and; (A &or; C)
        
    * Luật de morgan
        + &not;(A &and; B) &equiv; (&not;A &or; &not;B)
        + &not;(A &or; B) &equiv; (&not;A &and; &not;B)
        
    * 
        + A &and; (&not;A) &equiv; False
        + A &or; (&not;A) &equiv; True
        
    * 
        + A &and; True &equiv; A
        + A &or; False &equiv; A
        
    * Phủ định kép
        + &not;(&not;A) &equiv; A
        
    * Luật lũy đẳng
        +  (A &and; A) &equiv; A
        +  (A &or; A) &equiv; A
        
    + Luật hấp thụ
        + A &and; (A &or; B) &equiv; A
        + A &or; (A &and; B) &equiv; A
  
  - Định nghĩa 4:
    * Một công thức được gọi là đồng nhất sai hay hằng sai nếu nó nhận giá trị sai với mọi phép thế các giá trị chân lý của các biến có trong công thức đó.
    * Bởi vậy trong bảng chân lý của công thức này, cột cuối cùng chỉ gồm giá trị sai
    * Ta có thể nói rằng công thức A là đồng nhất đúng khi và chỉ khi (&not;A) là đồng nhất sai
  - Định nghĩa 5:
    * Một mệnh đề(được cho dưới dạng ngôn ngũ hằng ngày hoặc ngôn ngữ hình thức) nhận được từ một công thức đồng nhất đúng nào đó bằng cách thế các biến bởi các
    mệnh đề sao cho cùng 1 biến được thế bởi cùng một mệnh đề thì mệnh đề được gọi là logic đúng
    * Ví dụ: cho công thức đồng nhất đúng &Auml; = ((A &or; B) &and; (&not;B) &rarr; A). Ta có mệnh đề sau đây là logic đúng:
        + Nếu trời mưa hoặc tuyết rơi, và tuyết không rơi thì trời mưa
        
  - Định nghĩa 6:
    * Một mệnh đề nhận được từ một công thức đồng nhất sai bằng cách thế các biến bởi cùng một mệnh đề thì mệnh đề đó được gọi là logic sai.
    * Ví dụ: ta xét công thức đồng nhất sai: &Auml; = A &and; &not;A. Khi đó nếu ta thay A là mệnh đề "Tôi đi học" thì ta thu được mệnh đề sai như sau:
        + "Tôi đi học và tôi không đi học".
        
  - Định nghĩa 7: 
    * Một công thức &Auml; được gọi là thực hiện được (thỏa mãn được), nếu tồn tại ít nhát một bộ phân bố các giá trị chân lý của các biến có mặt trong công
    thức &Auml; sao cho &Auml; nhận giá trị đúng với bộ phân bố này.
    
##IV. Một số tính chất
   - Định lý 1:
     * Nếu &Auml; và &Auml; &rarr; &bernou; là các công thức đồng nhất đúng thì &bernou; cũng là công thức đồng nhất đúng.
   - Định lý 2:
     * Nếu &Auml; là một công thức đồng nhất đúng có chứa các biến A<sub>1</sub>, A<sub>2</sub>,..., A<sub>n</sub> và công thức &bernou; là công thức nhận
     được từ &Auml; bằng cách thế các công thức &Auml;<sub>1</sub>, &Auml;<sub>2</sub>,..., &Auml;<sub>n</sub> và các biến tương ứng A<sub>1</sub>, A<sub>2</sub>,..., A<sub>n</sub>
     thì công thức &bernou; cũng là đồng nhất đúng, nghĩa là phép thế trong một công thức đồng nhất đúng cho ta một công thức đồng nhất đúng.
   - Định lý 3:
     * Nếu &bernou;<sub>1</sub> nhận được từ &Auml;<sub>1</sub> bằng cách thế &bernou; vào một hoặc nhiều vị trí của &Auml; thì ((&Auml; &harr; &bernou;) &rarrl (&Auml;<sub>1</sub> &harr; &bernou;<sub>1</sub>))
     là công thức đồng nhất đúng. Trường hợp &bernou; và &Auml; là logic tương đương thì &bernou;<sub>1</sub> và &Auml;<sub>1</sub> cũng là logic tương đương.
   * Trên đây là một số tính chất về đồng nhất đúng rất đơn giản, dể hình dung và tính bất biến của tính chất đồng nhất đúng là hoàn toàn chứng minh được.
##V. Dạng chuẩn tắc của công thức mệnh đề
#####1. Dạng chuẩn tắc tuyển và chuẩn tắc hội     
   - Định nghĩa 1:
     * Một công thức mệnh đề được gọi là dang chuẩn tắc tuyển, nếu nó là tuyển của một hoặc nhiều hạng thức hội trong đó mỗi hạng thức hội được lập nên
     từ hội của một hoặc nhiều biến và phủ định của biến.
     * Ví dụ:
        + &Auml; = (A &and; B) &or; (&not;A &and; B) &or; (A &and; B &and; C)
        + &bernou; = (&not;A &and; (B &or; C)) &or; (A &and; B) &or; A không phải là dạng chuẩn tắt tuyển nhưng ta có thể biến đổi thành phần thứ nhất:
        (&not;A &and; B) &or; (&not;A &and; C). Ta có công thức sau: (&not;A &and; B) &or; (&not;A &and; C) &or; (A &and; B) &or; A là chuẩn tắt tuyển
   
   - Định nghĩa 2:
     * Một công thức mệnh đề được gọi là chuẩn tắc hội, nếu nó là hội của một hoặc nhiều hạng thức tuyển, trong đó mỗi hạng thức tuyển được lập nên từ tuyển
     của một hoặc nhiều biến phủ định của biến.

   - Ví dụ:
     * &Auml; = (A &and; B) &or; (&not;A &and; B) &or; (A &and; B &and; C) : là chuẩn tắc tuyển
     * &Auml; = (&not;A &and; (B &or; C)) &or; (A &and; B) &or; A : không là dạng chuẩn tắc tuyển nhưng ta có thể biến đổi thành phần thứ nhất.
     (&not;A &and; (B &or; C)) &isin; (&not;A &and; B) &or; (&not;A &and; C) khi đó &Auml; = (&not;A &and; B) &or; (&not;A &and; C) &or; (A &and; B) &or; A
     đây là dạng chuẩn tắc tuyển
        
        
#####2. Dạng chuẩn tắt hoàn toàn
   - Định nghĩa 1:
     * Một công thức mệnh đề được gọi là chuẩn tắc tuyển hoàn toàn, nếu nó là tuyển của các hạng thức hội, trong đó không có một hạng thức hội nào chứa biến
     và phủ định của nó, và nếu một biến có mặt trong 1 hạng thức hội thì nó phải có mặt trong mọi hạng thức hội khác.
   - Định nghĩa 2:
     * Một công thức mệnh đề được gọi là chuẩn tắt hội hoàn toàn, neus nó là hộ của các hạng thức tuyển, trong đókhong có môt hạng thức nào chứa biến và phủ định
     của nó, và nếu một biến có mặt trong hạng thức tuyển thì nó phải có mặt trong mọi hạng thức tuyển khác
     
     
#VI. Các hệ đầy đủ của các phép toán
#VII. Bài tập ôn tập chương 1
####1. Lập bảng chân lý đầy đủ cho các công thức:
  * &Auml; = ((A &rarr; B) &or; (&not; A))
    
  |  A  |   B   |   A &rarr; B  |   &not;A  |   &Auml;  |
  |:---:|:-----:|:-------------:|:---------:|:---------:|
  | T   |   T   |    T          |      F    |   T       | 
  | T   |   F   |   F           |      F    |   F       |
  | F   |   T   |   T           |   T       |   T       |
  | F   |   F   |   T           |   T       |   T       |
  
  * &Auml; = ((A &rarr; (B &rarr; C)) &rarr; ((A &rarr; B) &rarr; (A &rarr; C))
  
  Đặt ((A &rarr; (B &rarr; C)) = VT và ((A &rarr; B) &rarr; (A &rarr; C)) = VP <=> &Auml; = VT &rarr; VP
        
  
  |  A  |   B   |   C   |   B &rarr; C  |    VT     | (A &rarr; B)  |   (A &rarr; C)    |       VP      |   &Auml;  |
  |:---:|:-----:|:-----:|:-------------:|:---------:|:-------------:|:-----------------:|:-------------:|:---------:|
  | T   |   T   |   T   |   T           |   T       |   T           |       T           |       T       |       T   |
  | T   |   T   |   F   |   F           |   F       |   T           |       F           |       F       |       T   |
  | T   |   F   |   T   |   T           |   T       |   F           |       T           |       T       |       T   |
  | T   |   F   |   F   |   T           |   T       |   F           |       T           |       T       |       T   |
  | F   |   T   |   T   |   T           |   T       |   T           |       T           |       T       |       T   |
  | F   |   T   |   F   |   F           |   T       |   T           |       T           |       T       |       T   |
  | F   |   F   |   T   |   T           |   T       |   T           |       T           |       T       |       T   |
  | F   |   F   |   F   |   T           |   T       |   T           |       T           |       T       |       T   |
  
  
####2. Lập bảng chân lý thu gọn cho các công thức:
  * ((A &rarr; B) &and; A)
    
  |     (A   |   &rarr;  |   B)      |   &and;   |   A   |
  |:--------:|:---------:|:---------:|:---------:|:-----:|
  |     T    |    T      |      T    |     T     |   T   |  
  |     T    |     F     |    F      |     T     |   T   |
  |     F    |     T     |    T      |     F     |   F   |
  |     F    |     F     |    F      |     T     |   F   |
  
  * ((A &or; (&not; C)) &harr; B )
  
####3. Các công thức có đồng nhất đúng hay không
#####a. (((A &rarr; B) &rarr; B) &rarr; B) 
  - Chúng ta lập bảng chân lý đầy đủ:
    
  |   A   |   B   |   A &rarr; B    |     ((A &rarr; B) &rarr; B)  | (((A &rarr; B) &rarr; B) &rarr; B) |
  |:-----:|:-----:|:---------------:|:----------------------------:|:----------------------------------:|
  |   T   | T     |       T         |           T                  |        T                           |     
  |    T  | F     |       F         |           T                  |        F                           |
  |     F | T     |      T          |       T                      |        T                           |
  |     F | F     |     T           |       F                      |        T                           |
  .
  - Chúng ta nhìn vào cột cuối cùng và thấy rằng có 1 giá trị false. Đồng nhất đúng khi và chỉ khi toàn bộ mang giá trị T. Vì vậy
  công thức này không là đồng nhất đúng
   
#####b. ((A &rarr; B) &rarr; (A &rarr; (B &rarr; A)))
  - Chúng ta lập bảng chân lý đầy đủ:
  - Đặt: (A &rarr; B) = u , (A &rarr; (B &rarr; A)) = v . Khi đó ta chỉ cần chứng minh u &rarr; v là đồng nhất đúng
    
  
  |     A       |      B        |       u       |     (B &rarr; A)      |       v       |       KQ      |
  |:-----------:|:-------------:|:-------------:|:---------------------:|:-------------:|:-------------:|
  |     T       |       T       |      T        |       T               |       T       |       T       |  
  |     T       |       F       |      F        |       T               |       T       |       T       |
  |     F       |       T       |      T        |       F               |       T       |       T       |
  |     F       |       F       |      T        |       T               |       T       |       T       |
  
  
  - Chúng ta thấy cột KQ(kết quả - cuối cùng) toàn giá trị T vì vậy đây là công thức đồng nhất đúng


####4. Kiểm tra các công thức sau:
#####a. (A &harr; B) logic kéo theo (A &rarr; B) ?
  - Theo như đã biết chúng ta chỉ cần chứng minh BT = (A &harr; B) &rarr; (A &rarr; B) là đồng nhất đúng.
  
#####b. (&not;A) &or; B và ((&not;B) &or; A) logic tương đương ?
  - Theo như đã biết chúng ta chỉ cần chứng minh BT = (&not;A) &or; B &harr; ((&not;B) &or; A) là đồng nhất đúng.
  
####5. Cho hàm đại số logic f(x1, x2, x3) sau đây:
   |    x1  |    x2     |    x3     | f(x1, x2, x3)     |
   |:------:|:---------:|:---------:|:-----------------:|
   |1       |1          |1          |   0               |
   |1       |1          |0          |       0           |
   |    1   |0          |1          |1                  |
   |1       |0          |0          |       1           |
   |0       |1          |   1       |       0           |
   |0       |1          |0          |   0               |
   |0       |0          |1          |        1          |
   |0       |0          |0          | 1                 |
