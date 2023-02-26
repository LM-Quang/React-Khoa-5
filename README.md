# React Khoá 5 - Dự án Đặt vé xem phim

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