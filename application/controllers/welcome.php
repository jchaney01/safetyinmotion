<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	 public function __construct()
        {
            parent::__construct();
        }
	public function index()
	{
        $data = array(
            "view"=>'welcome'
        );
        $this->load->view('layout',$data);
	}
	public function test()
	{
		$this->load->view('welcome_message');
	}
}
