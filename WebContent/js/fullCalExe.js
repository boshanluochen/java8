$(function() {
  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaWeek,agendaDay'
    },
	monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	dayNames: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
	dayNamesShort: ['周一','周二','周三','周四','周五','周六','周日'],    
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: '年',
        today: '返回今天',
        month: '月',
        week: '周',
        day: '日'
    },
    allDaySlot: false, //全天
    slotLabelFormat: '(HH:mm)', //左侧时间格式
    editable: true,
    eventLimit: true,
    events: [
	    {
	      title  : 'event1',
	      start  : '2018-03-27 02:00:00'
	    },
	    {
	      title  : 'event2',
	      start  : '2010-01-05',
	      end    : '2010-01-07',
	      url: 'http://www.baidu.com/'
	    },
	    {
	      title  : 'event3',
	      start  : '2010-01-09T12:30:00',
	      allDay : false // will make the time show
	    }
    ]
  })
});