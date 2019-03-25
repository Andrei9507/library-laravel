<?php
    
    function showHelper()
    {
        dd('i am in helper');

    }

function dateFromSql($date, $time = false)
{
    if( empty($date) || $date == '0000-00-00')
        return '';
    elseif($date)
    {
        if($time)
            return date("d.m.Y H:i:s", strtotime( $date ));
        
        return date("d.m.Y", strtotime( $date ));
    }
}