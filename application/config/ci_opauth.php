<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['opauth_config'] = array(
                                'path' => '/auth/login/', //example: /ci_opauth/auth/login/
                    			'callback_url' => '/auth/authenticate/', //example: /ci_opauth/auth/authenticate/
                                'callback_transport' => 'post', //Codeigniter don't use native session
                                'security_salt' => 'sbjkbh787JKHjkhhi',
                                'debug' => FALSE,
                                'Strategy' => array( //comment those you don't use
                                    'Twitter' => array(
                                        'key' => '2RYrcB9uc6IylC6T0SlcJg',
                                        'secret' => 'DvH1or5pwxRYhNpApTDq558AWUazXIDkzyurTBbpas'
                                    ),
                                    'Facebook' => array(
                                        'app_id' => '176607002472779',
                                        'app_secret' => 'afaa8ccf4f0892cece86d1976e3ec861',
                                        'scope' => 'email'
                                    )
//                                    'Google' => array(
//                                        'client_id' => 'client_id',
//                                        'client_secret' => 'client_secret'
//                                    ),
//                                    'OpenID' => array(
//										'openid_url' => 'openid_url'
//									    )
                                )
                            );

/* End of file ci_opauth.php */
/* Location: ./application/config/ci_opauth.php */
