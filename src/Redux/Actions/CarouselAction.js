import { quanLyPhimService } from "../../Services/QuanLyPhimService.js";
import { SET_CAROUSEL } from "../Type/CarouselType.js";

export const getCarouselAction = async (dispatch) => {
   try {
      const result = await quanLyPhimService.layDanhSachBanner();
      dispatch({
         type: SET_CAROUSEL,
         arrImg: result.data.content,
      });
   } catch (error) {
      console.log("error", error);
   }
};
