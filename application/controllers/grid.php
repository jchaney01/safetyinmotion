<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Grid extends CI_Controller {

	 public function __construct()
        {
            parent::__construct();
        }
	public function index()
	{
        $data = array(
            "view"=>'grid'
        );
        $this->load->view('layout',$data);
	}
}
