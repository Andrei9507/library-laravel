<div class="ui {{Auth::user() ? 'five' : 'four'}}  item menu sticky">
    <a class="item {{ (\Request::path() == 'rents') ? 'active' : '' }}">Rents</a>
    <a class="item {{ (\Request::path() == 'authors') ? 'active' : '' }} " href="{{ url('authors') }}" >Authors</a>
    <a class="item {{ (\Request::path() == 'books') ? 'active' : '' }}"  href="{{ url('books') }}" >Books</a>
    <a class="item {{ (\Request::path() == 'customers') ? 'active' : '' }}"  href="{{ url('customers') }}" >Customers</a>
    @if(Auth::user()) 
      <a class="item" href="{{ route('logout') }}"
          onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
          {{ __('Logout') }}
      </a>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          @csrf
      </form>
    @endif
</div>

<script>
$('.ui.sticky')
  .sticky({
    // context: '#example1'
  })
;
</script>