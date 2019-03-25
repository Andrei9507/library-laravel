<div class="ui four item menu sticky">
    <a class="item {{ (\Request::path() == 'rents') ? 'active' : '' }}">Rents</a>
    <a class="item {{ (\Request::path() == 'authors') ? 'active' : '' }} " href="{{ url('authors') }}" >Authors</a>
    <a class="item {{ (\Request::path() == 'books') ? 'active' : '' }}"  href="{{ url('books') }}" >Books</a>
    <a class="item {{ (\Request::path() == 'customers') ? 'active' : '' }}"  href="{{ url('customers') }}" >Customers</a>
</div>

<script>
$('.ui.sticky')
  .sticky({
    // context: '#example1'
  })
;
</script>