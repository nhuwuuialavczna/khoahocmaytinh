Chương 1 - Giưới thiệu về sự biên dịch
====================================================
Để máy tính có thể thực thi một chương trinh với ngôn ngữ cấp cao ta cần phải có 1 trình biên dịch thực hiện việc chuyển đổi chương trình đó sang chương trình dạng
ngôn ngữ đích
#I. Trình biên dịch
Nói 1 cách đơn giản, trình biên dịch là một chương trình làm nhiệm vụ đọc một chương trình được viết bằng một ngôn ngữ - ngôn ngữ nguồn (source language) - rồi
dịch nó thành một chương trình tương đương ở ngôn ngữ khác - ngôn ngữ đích (target language). Một phần quan trọng trong quá trình dịch là ghi nhận lại các lỗi
có trong chương trình nguồn để thông báo lại cho người viết chương trình
###1. Mô hình phân tích - tổng hợp của 1 trình biên dịch
   * Chương trình dịch thường bao gồm 2 quá trình: Phân tích và tổng hợp
     - Phân tích -> đặc tả trung gian
     - Tổng hợp -> chương trình đích
     
     ![Mô hình phân tích và tổng hợp](https://dataforall.azurewebsites.net/trinhbiendich/c1/Mohinhphantichtonghop.png)
    
   * Trong quá trình phân tích chương trình nguồn sẽ được phân rã thành một cấu trúc phân cấp, thường là dạng cây - cây cú pháp (syntax tree) mà trong đó mỗi
   nút là một toán tử và các nhánh con là 1 toán hạng.
   * Ví dụ: Cây cú pháp cho câu phép tính 1 + 2 + 3 *6
   
   ![Ví dụ cấu trúc phân nhánh](https://dataforall.azurewebsites.net/trinhbiendich/c1/viducautrucphannhanh.png)
   
###2. Môi trường của trình biên dịch
   * Ngoài trình biên dịch, cuhunsg ta có thể dùng nhiều chương trình khác nữa để tạo ra một chương trình đích có thể thực thu được (executable). Các chương trình
   đó bao gồm: Bộ tiền xử lý, Trình dịch hợp ngữ, BỘ tải và soạn thảo liên kết. 
   * Một chương trình nguồn có thể được phân thành các module và được lưu trong các tập tin riêng rẽ. Công việc tập hợp các tập tin thường giao cho 1 chương
   trình riêng biệt gọi là bộ tiền xử lý (preprocessor). Bộ tiền xử lý có thể "Bung" các kí hiệu tắt được gọi là các macro thành các  câu lênh của ngôn ngữ
   nguồn. 
   * Ngoài ra, chương trình đích được tạo ra bởi trình biên dịch cần được phải xử lý thêm trước khi chúng có thể chạy được. Thông thường trình biên dịch chỉ
   tạo ra mã lệnh hợp ngữ. (assembly code) để trình biên dịch hợp ngữ (assembler) dịch thành dạng mã máy rồi thực hiện liên kết với 1 số thủ tục trong thư viện
   hệ thống thành các mã thực thi được trên máy tính. 
   * Đây là một trình xử lý điển hình:
   
        ![Ví dụ về xử lý điển hình](https://dataforall.azurewebsites.net/trinhbiendich/c1/XuLyDienHinh.png)
    
#II.Sự phân tích chương trình nguồn
###1. Phân tích từ vựng (Lexical Analysis)    
  * Trong một trình biên dịch, giai đoạn phân tích từ vựng sẽ đọc chương trình nguồn từ trái sang phải (quét nguyên liệu - scanning) để tách thành các thẻ
  token.
  * Ví dụ: Quá trình phân tích từ vựng cho câu lệnh gán: position := initial + rate * 60 sẽ tách thành các token như sau:
    1. Danh biểu position
    2. Kí hiệu gán :=
    3. Danh biểu initial
    4. Kí hiệu phép cộng (+)
    5. Danh biểu rate
    6. Kí hiệu phép nhân (*)
    7. Số 60
  * Trong quá trình phân tích từ vựng các khoảng trắng bị bỏ qua
    
###2. Phân tích cú pháp
  * Giai đoạn phân tích cú pháp thực hiện công việc nhóm các thẻ từ của chương trình nguồn thành các ngữ đoạn văn phạm (grammatical phrase), mà sau đó sẽ 
  được trình biên dịch tổng hợp ra thành phẩm. Thuông thường các ngữ đoạn văn phạm này được biểu diễn bằng 1 cây phân tích cú pháp (parse tree) với:
    + Ngôn ngữ đặc tả bởi các luật sinh
    + Phân tích cú pháp dựa vào luật sinh để xây dựng cây phân tích cú pháp
    
  * Ví dụ: Giả sử ngôn ngữ đặt tả bởi các luật sinh sau:
    + Stmt (statement) -> id := expr (expression)
    + expr -> expr + expr | expr * expr|id|number
    
    + Với câu lệnh: position := initial + rate * 60, cây phân tích cú pháp được xây dựng như sau:
    
        ![Ví dụ về xử lý điển hình](https://dataforall.azurewebsites.net/trinhbiendich/c1/cayphantich1.png)
     
    + Cấu trúc phân cấp của 1 chương trình thường được biểu diễn bởi qui luật đệ qui.
    
  * Ví dụ:
     1. Danh biểu (identifier) là một biểu thức (expr)
     2. Số (number) là một biểu thức 
     3. Nếu expr1 và expr2 là các biểu thức thì:
         + expr1 + expr2
         + expr1 * expr2
         + (expr) 
     cũng là biểu thức
     
  * Câu lệnh (stmt - statement) cũng có thể định nghĩa đệ qui
     1. Nếu id1 là 1 danh biểu và expr2 là 1 biểu thức thì id1 := expr2 là một lệnh (stmt)
     2. Nếu expr1 là một biểu thức và stmt2 là một lệnh thì 
        + while(expr1) do stmt2
        + if(expr1) then stmt2
     đều là các lệnh
  
  * Người ta dùng các qui tắc đệ qui như trên để đặc tả luật sinh (production) cho ngôn ngữ. Sự phân chia giữa quá trình phân tích từ vựng và phân tích 
  cú pháp cũng tùy theo công việc thực hiện. 
  
###3. Phân tích ngữ nghĩa (Semantic Analysis)
  * Giai đoạn phân tích ngữ ngữ nghĩa sẽ thực hiện việc kiểm tra chương trình nguồn có chứa lỗi về ngữ nghĩa hay không và tập hợp thông tin về kiểu cho giai
  đoạn sinh mã về sau. Một phần quan trọng trong giai đoạn phân tích ngữ nghĩa là kiểm tra kiểu (type checking) và ép chuyển đổi kiểu.
  * Ví dụ: Trong biểu thức position := initial + rate * 60. Các number được khai báo là số real. Tuy nhiên 60 là số integer nên trình biên dich đổi số
  nguyên 60 thành số thực 60.0
  
#III. Các giai đoạn biên dịch
Một cách phân rã điển hình được thể hiện như sau:

![Ví dụ về phân rã điển hình](https://dataforall.azurewebsites.net/trinhbiendich/c1/cacgiaidoanchuongtrinhdich.png)

  * Việc quản lý bảng kí hiệu và xử lý lỗi được thực hiện xuyên suốt qua tất cả các giai đoạn.
  
###1. Quản lý bảng kí hiệu:
  * Một nhiệm vụ quan trọng của trình biên dịch là ghi lại các định danh được sử dụng trong chương trình nguồn và thu thập csc thuộc tính khác nhau của mỗi định danh.
  Những thuộc tính này có thẻ cung cấp thông tin về vị trí lưu trức cho được cấp phát cho 1 định danh, kiểu và tầm vực của định danh, và nếu đinh danh là tên
  của 1 thủ tục thì thuộc tính là thông tin và số lượng và kiểu của các đối số, phương pháp truyền đối số và kiểu trả về của thủ tục nếu có.
  * Bảng kí hiệu (symbol table) là một cấu trúc dữ liệu mà mỗi phần tử là một định danh, bao gồm các trường lưu giữ kí hiệu và các thuộc tính của nó. Cấu trúc này cho phép
  tìm kiếm truy xuất danh biểu 1 cách nhanh chóng. 
  * Trong quá trình phân tích từ vựng, danh biểu được tìm thấy và nó được đưa vào bảng kí hiệu nhưng nói chung các thuộc tính của nó có thể chưa xác định
  được trong giai đoạn này.
  
###2. Xử lý lỗi
 * Mỗi giai đoạn đều có thể gặp nhiều lỗi, tuy nhiên sau khi phát hiện ra lỗi, tùy thuộc vào trình biên dịch mà có các xử lý lỗi khác nhau, chẳng hạn:
   +  Dừng và thông báo lỗi đầu tiên (Pascal)
   +  Ghi nhận lỗi và tiếp tục quá trình dịch (C)
 * Giai đoạn phân tích từ vựng gặp lỗi khi các kí tự không thể ghép thành 1 token
 * Giai đoạn phân tích cú pháp gặp lỗi khi các token không thể kết hợp với nhau theo đúng cấu trúc ngôn ngữ.
 * Giai đoạn phân tích ngữ nghĩa báo lỗi khi các toán hạng có kiểu không đúng yêu cầu của phép toán hay các kết cấu không có ý nghĩa đối với các thao tác
 thực hiện mặc dù chúng hoàn toàn đúng về mặt cú pháp.
 
###3. Các giai đoạn phân tích
 * Giai đoạn phân tích từ vựng: ĐỌc từng kí tự gọp lại thành token, token có thể là một danh biểu, từ khóa, một kí hiệu,... Chuỗi kí tự tạo thành token gọi
 là lexeme - trị từ vựng của token đó. 
 * Giai đoạn phân tích cú pháp và phân tích ngữ nghĩa: Xây dựng cấu trúc phân cấp cho chuỗi các token, biểu diễn bởi cây cú pháp và kiểm tra ngôn ngữ 
 theo cú pháp.

###4. SInh mã trung gian
  * Sau khi phân tích ngữ nghĩa, một số trình biên dịch sẽ tạo ra một dạng biểu diễn trung gian của chương trình nguồn. Chúng ta có thể xem dạng biểu diễn
  này như một chương trình dành cho máy trừu tượng. Chúng có 2 đặc tính quan trọng: dễ sinh và dể dịch thành chương trình đích. 
  * Dạng biểu diễn trung gian có rất nhiều loại. THông thường, người ta sử dụng dạng "mã máy 3 địa chỉ" (three-address code), tương tự như dạng hợp ngữ cho một
  máy mà trong đó mỗi vị trí bộ nhớ có thể đóng vai trò như một thanh ghi.
  * Mã máy 3 địa chỉ là một dãy lệnh liên tiếp, mỗi lệnh có tối đa 3 đối số. 
  
###5. TỐi ưu mã:
  * Giai đoạn tối ưu mã cố gắng cải thiện mã trung gian để có thể có mã máy thực hiện nhanh hơn. Một số phương pháp tối ưu hóa hoàn toàn bình thường.
  
###6. Sinh mã:
  * Giai đoạn cuối cùng là sinh mã đích, thường là mã máy hoặc mã hợp ngữ. 
  