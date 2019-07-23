<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <title>Start Page</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script language="javascript" type="text/javascript" src="<c:url value="/docroot/scripts/webapp.min.lib.js"/>"></script>
    </head>
    <body>
        <h1 class="hoge">Hello World!</h1>
        <div class="uk-container">
            <div class="uk-card uk-card-body uk-card-primary">
                <h3 class="uk-card-title">Example headline</h3>
                <button class="uk-button uk-button-default" uk-tooltip="title: Hello World">Hover</button>
                <span class="uk-margin-small-right" uk-icon="check"></span>
                <span uk-icon="heart"></span>
            </div>
        </div>
    </body>
</html>