package com.home.middle.board.qna;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.home.middle.board.BbsDTO;
import com.home.middle.board.review.ReviewDTO;
import com.home.middle.product.ProductDTO;
import com.home.middle.util.Pager;

@Controller
@RequestMapping("/qna/**")
public class QnaController {
	
	@Autowired
	private QnaService qnaService;
	
	@ModelAttribute("boardName")
	public String getBoardName() {
		return "boardName";
	}
	
	@RequestMapping(value="list", method = RequestMethod.GET)
	public ModelAndView getBoardList(Pager pager)throws Exception {
	ModelAndView mv = new ModelAndView();

	List<BbsDTO> ar = qnaService.getBoardList(pager);

	mv.addObject("pager",pager);
	mv.addObject("list",ar);
	mv.setViewName("board/boardList");
		
	return mv;			
	}
	
	
	//글쓰기 
	@GetMapping("add")
	public ModelAndView SetBoardAdd(ProductDTO productDTO) throws Exception{
	ModelAndView mv = new ModelAndView();
	mv.addObject("dto",productDTO);
	mv.setViewName("board/add");
	return mv;
	}
	
	@PostMapping("add")
	public ModelAndView setBoardAdd(QnaDTO qnaDTO, MultipartFile [] files, HttpSession session)throws Exception{
	ModelAndView mv = new ModelAndView();
	int result = qnaService.setBoardAdd(qnaDTO, files, session);
	String message = "등록이 실패했습니다.";
	if(result>0) {
		 message = "등록을 성공했습니다.";
	}
	
	mv.addObject("result", result);
	mv.addObject("url", "./list");
	mv.setViewName("common/result");
	return mv;
	}	
	
	
	@GetMapping("listqnaTop")
	public ModelAndView getQnaListTop(Pager pager) throws Exception{
	ModelAndView mv = new ModelAndView();
	pager.setPerPage(5L);
	
	List<BbsDTO> ar = qnaService.getBoardList(pager);
	
	mv.addObject("list", ar);
	mv.setViewName("common/qnaResult");
	return mv;
	
	}
	
}
