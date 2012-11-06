<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <!-- Use the .htaccess and remove these lines to avoid edge case issues.
 More info: h5bp.com/i/378 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php echo base_url();?></title>
    <meta name="description" content="">

    <!-- Mobile viewport optimized: h5bp.com/viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

    <!-- Core Bootstrap css + Kickstrap styles -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('css/bootstrap.css');?>">
    <!--    <link rel="stylesheet" type="text/css" href="--><?php //echo base_url('css/responsive.css');?><!--">-->

    <!-- Uncomment for animated css (https://github.com/daneden/animate.css) -->
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('extras/animate/animate.min.css')?>"/>
    <script src="<?php echo base_url('extras/h5bp/js/libs/modernizr-2.5.3.min.js')?>"></script>
</head>
<body>
<?php if (class_exists('facebook')) {
    $cache_expire = 60 * 60 * 24 * 365;
    header("Pragma: public");
    header("Cache-Control: max-age=" . $cache_expire);
    header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $cache_expire) . ' GMT');
    ?>
<script src="//connect.facebook.net/en_US/all.js"></script>
<div id="fb-root"></div>
<script src="//connect.facebook.net/en_US/all.js"></script>
<script>
    window.fbAsyncInit = function () {
        FB.init({
            appId: <?php echo $this->config->item('appId') ?>, // App ID
            channelUrl: <?php echo $this->config->item('secret') ?>, // Channel File
            status:true, // check login status
            channel:true,
            cookie:true, // enable cookies to allow the server to access the session
            xfbml:true  // parse XFBML
        });

        // Additional initialization code here
    };

    // Load the SDK Asynchronously
    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
</script>
    <?php }?>
<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
chromium.org/developers/how-tos/chrome-frame-getting-started -->
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a
    different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a>
    to experience this site.</p><![endif]-->

<div class="container-fluid">
    <div class="row-fluid">
        <div class="span12" style="text-align: center">
            <div class="animated fadeInLeft"><img src="<?php base_url()?>/img/logo.png" width="300"/></div>
            <div class="animated fadeInRight">
                <form class="form-inline">
                    <select id="CSV_version" style="display: block;margin: 0 auto 20px auto">
                        <option value="1">Version 1</option>
                    </select>
                    <input id="access_code" type="text" class="input-large" placeholder="Access Code">
                    <button class="btn btn-primary" id="download" data-loading-text="Downloading..." ><i class="icon icon-download-alt"></i> Download CSV</button>
                </form>
                <div style="display: none" class="alert fade in">
                    <a class="close" data-dismiss="alert" href="#">×</a>
                    <strong>Invalid Code</strong> The code is available in the <a href="http://passwords.tenfouragency.com" target="_blank">Master Password Tool located at passwords.tenfouragency.com</a>.
                </div>
                <div style="font-size: 0.7em;color:#999797">CSV Downloader by <a href="mailto:jchaney@tenfouragency.com">Jason Chaney</a></div>
            </div>
        </div>
    </div>
</div>
<!-- JavaScript at the bottom for fast page loading -->

<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="extras/h5bp/js/libs/jquery-1.7.1.min.js"><\/script>')</script>

<!-- scripts concatenated and minified via build script -->
<script src="<?php echo base_url('extras/h5bp/js/plugins.js')?>"></script>
<!-- Or use this line if you're using H5BP's build script -->
<!--script src="extras/h5bp/publish/js/eaf4d2f.js"></script-->

<!-- Full Bootstrap js file. -->
<script type="text/javascript" src="<?php echo base_url('js/bootstrap.min.js')?>"></script>

<!-- jGrowl -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php echo base_url('extras/jgrowl/jquery.jgrowl.min.js')?>"></script>
<script type="text/javascript" src="<?php echo base_url('js/global.js')?>"></script>

<script type="text/javascript" src="<?php echo base_url('extras/chosen/chosen.jquery.min.js')?>"></script>
<script type="text/javascript" src="<?php echo base_url('js/bootstrap-popover.js')?>"></script>
<script type="text/javascript" src="<?php echo base_url('js/bootstrap-button.js')?>"></script>
<!-- Activate Chosen js -->
<script type="text/javascript"> $(".chzn-select").chosen();
$(".chzn-select-deselect").chosen({allow_single_deselect:true}); </script>
<script>
    $(document).ready (function() {
        $('#CSV_version').popover({
            title:"Select CSV version",
            content:"If multiple campaigns or versions are run for this project, you'll be able to choose what dataset you want in order to preserve access to legacy rollouts.",
            trigger:'hover'
        });
        $('#access_code').popover({
            title:"Enter the access code",
            content:"You need to paste the access code for this project in order to download the CSV.  You can get it from passwords.tenfouragency.com",
            placement:'bottom'
        });
        $("#download").click(function(e){
            e.preventDefault();
            $(e.currentTarget).button('loading');
            $(".alert").show();
        });
    });
</script>

<!--  <script>-->
<!--    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];-->
<!--    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];-->
<!--    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';-->
<!--    s.parentNode.insertBefore(g,s)}(document,'script'));-->
<!--  </script>-->
</body>
</html>