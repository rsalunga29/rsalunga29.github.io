<!DOCTYPE html>
<html>
<head>
	<title>Roland Emmanuel Salunga | Software Engineer</title>
	<link rel="icon" href="src/images/favicon.ico" type="image/ico">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700">
	<link rel="stylesheet" href="src/stylesheets/main.css" type="text/css">
</head>
<body>
	<div class="container wrapper">
		<div class="col-md-6 mx-auto">
			<img src="src/images/me.jpg" class="rounded-circle img-fluid mx-auto d-block my-picture" title="my image">
			<div class="text-center" id="my_info">
				<div class="my_name">{{full_name}}</div>
				<div class="my_occupation">{{occupation}} at {{company}}</div>
				<div class="my_occupation">{{location}}</div>
				<div class="social_media"><a href="https://github.com/rsalunga29/"><i class="fa fa-github" aria-hidden="true"></i></a></div>

				Copyright <?=date("Y")?>. All Rights Reserved.
			</div>
		</div>
	</div>
	<script src="https://unpkg.com/vue"></script>
	<script src="src/scripts/main.js" type="text/javascript"></script>
</body>
</html>