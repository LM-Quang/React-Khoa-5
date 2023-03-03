# React Khoá 5 - Dự án Đặt vé xem phim
   - link source: [https://github.com/khaitruong1301/react_cyberlearn_khoahoc_05]
   - [https://react-slick.neostack.com/docs/example/multiple-items]
   - [http://movieapi.cyberlearn.vn/swagger/index.html]
   - [https://docs.google.com/document/d/12N-u6ox6gt8FgML1Y3zbjipxIZRTN_vrtisJRzWy87c/edit]
   - [https://freefrontend.com/css-card-hover-effects/]
   - [http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01]
# Các thư viện sử dụng trong khoá này:
   - react-router-dom
   - react-redux
   - redux
   - redux-thunk
   - axios
   - lodash
   - tailwindcss
   - antd
   - history
   - moment
   - react slick
   - customcard

# Các thư viện Tailwind Component miễn phí
   - `mambaui.com`
   - `tailblocks.cc`
   - `play.tailwindcss.com`
   - `taiwindui.com`
   - `freefrontend.com`

# Các trang Web có React Component dựng sẵn
   - https://react-slick.neostack.com/docs/example/multiple-items/

# Link API cho dự án Đặt vé xem phim
   - http://movieapi.cyberlearn.vn/swagger/index.html
   - http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01

# Phần 1: Cấu hình thư mục
   - Gồm các thư mục: `Assets`, `Components`, `Pages`, `Redux`, `Template`, và `Util`
   - Redux gồm có: `Actions`, `Types`, `Reducer` và `configStore`, sau đó chèn store vào `index.js`

# Phần 2: Cấu hình cho App.js với các `Route `

# Phần 3: Tạo HomeTemplate cho trong `Home` có Component chung: `Header`, `Footer`

# Phần 4: Gọi API lấy thông tin Banner phim
   - Trong Component `HomeCarousel` tạo state `arrImg`(lưu trên `Reducer Carousel`) để quản lý các Banner phim
   - Sử dụng `useEffect` để kích hoạt gọi API load ra arImg
   - Trong `useEffect` dispatch 1 callback Function và thông qua `Redux thunk `để gửi dữ liệu lên `Reducer Carousel`
   - Sau khi `Reducer` cập nhật lại arrImg thì componet cũng sẽ cập nhật và load ra Banner phim

# Phần 5: Giao diện Trang chủ Load danh sách phim
   - Xây dựng giao diện
   - Tổ chức Service `layDanhSachPhim` (QuanLyPhimService)
   - Tổ chức Reducer: `QuanLyPhimReducer`
   - Lấy state từ Reducer về Component `Home`


# Phần 6: Giao diện Trang chủ Load danh sách cụm rạp
   - Xây dựng giao diện
   - Tổ chức Service `layThongTinLichChieuHeThongRap` (QuanLyRapService)
   - Tổ chức Reducer: `QuanLyRapReducer`
   - Lấy state từ Reducer về Component `Home`

#　Phần 7: Giao diện trang Detail load dữ liệu phim
   - Xây dựng giao diện
   - Tổ chức Service `layThongTinLichChieuPhim` (QuanLyRapService)
   - Tổ chức Reducer: `filmDetails` (QuanLyPhimReducer)
   - Lấy id phim từ `props.params.id`
   - Lấy state từ Reducer về Component `Details`

# Phần 8: Giao diện `Template trang Đặt vé` và sử dụng `React Lazy` để chèn hiệu ứng loading

# Phần 9: Giao diện trang `UserTemplate` và trang `Login`
   - Xây dựng giao diện
   - Tổ chức Service `dangNhap` (QuanLyNguoiDungService)
   - Tổ chức Reducer: `userLogin` (QuanLyNguoiDungService)
   - Tổ chức Action `dangNhapAction`, khi đăng nhập thành công thì lưu `accessToken` vào `localStorage`

# Phần 10: Giao diện trang Đặt vé `CheckOut.js`
   - Xây dựng giao diện
   - Tổ chức các `Service`, `Action`, `Reducer` kết nối đến Component
   - Xử lý các tính năng liên quan đến đặt vé
   - Dùng thư viện `aspnet/signalr` sử dụng tính năng `real time` khi đặt vé

# Phần 10: Tính năng đa ngôn ngữ
   - Cài đặt thư viện `react-i18next`
   - Trong thư mục `public` tạo thư mục `Locales` và tạo file `translation.json` cho các ngôn ngữ mong muốn
   - Chèn thư viện vào `index.js`
   - Dùng thư viện trong `Header.js`

# Phần 11: Hoàn tất các chức năng khác
   - Xây dựng chức năng cho nút `Sign In`, `Sign Up` trong `Header.js`
   - Kết nối các link giờ chiếu trong `HomeMenu` sang trang `CheckOut`
   - Xây dựng nút đăng xuất và hiển thị thông tin tài khoản trong trang `CheckOut`
   - Chèn hiệu ứng `window.scrollTo(0,0)` vào các `Template` và `Detail` để đảm bảo vị trị luôn ở đầu trang khi được load

# Phần 12: Xây dựng trang Admin
   - Xây dựng `AdminTemplate`
   - Xây dựng các trang `Dashboard`, `Showtime`, `Films`, `Edit`, `AddNew`
   - Xây dựng chức năng `Service`, `Action`, `Reducer` cho `QuanLyPhim`
   - Kết nối đến các Component
   - Trong Component `AddNew`, dùng `FormData()` của JavaScript để xử lý thông tin gửi về backend theo dạng `formData` (khác với json)
   - Dùng `FileReader()` và các thuộc tính của thẻ img để xử lý khi upload hình ảnh vào `formData`