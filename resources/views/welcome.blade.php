@extends('layouts.layout')

<!DOCTYPE html>
<html lang="pt-br" data-sidenav-size="sm-hover">
  <head>
    <!-- Outras tags head -->
    @yield('head')
  </head>
  <body>
    <header>
      <!-- Conteúdo do cabeçalho -->
      @yield('header')
    </header>

    <footer>
      <!-- Conteúdo do rodapé -->
      @yield('footer')
    </footer>
  </body>
</html>
