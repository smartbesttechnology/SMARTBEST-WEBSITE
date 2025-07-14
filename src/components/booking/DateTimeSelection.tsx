import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_HOURS } from '../../config/booking';

interface DateTimeSelectionProps {
  selectedDate?: string;
  selectedTime?: string;
  duration: number;
  onDateTimeSelect: (date: string, time: string) => void;
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  selectedDate,
  selectedTime,
  duration,
  onDateTimeSelect
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(
    selectedDate ? new Date(selectedDate) : null
  );

  // Generate available time slots for business hours
  const generateTimeSlots = () => {
    const slots: string[] = [];
    const startTime = BUSINESS_HOURS.startTime;
    const endTime = BUSINESS_HOURS.endTime;
    const slotDuration = BUSINESS_HOURS.slotDuration;

    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
      const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      slots.push(timeString);

      currentMinute += slotDuration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute = currentMinute % 60;
      }
    }

    return slots;
  };

  useEffect(() => {
    setAvailableSlots(generateTimeSlots());
  }, []);

  // Get calendar days for current month
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: Date[] = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  // Check if date is available for booking
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    // Check if date is in the past
    if (checkDate < today) return false;

    // Check if date is within advance booking limit
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + BUSINESS_HOURS.advanceBookingDays);
    if (checkDate > maxDate) return false;

    // Check if date is a working day (Monday to Friday)
    const dayOfWeek = checkDate.getDay();
    return BUSINESS_HOURS.workingDays.includes(dayOfWeek);
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateAvailable(date)) return;
    
    setSelectedDateObj(date);
    const dateString = date.toISOString().split('T')[0];
    
    // Clear selected time when date changes
    if (selectedTime) {
      onDateTimeSelect(dateString, '');
    } else {
      onDateTimeSelect(dateString, selectedTime || '');
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDateObj) {
      const dateString = selectedDateObj.toISOString().split('T')[0];
      onDateTimeSelect(dateString, time);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calendarDays = getCalendarDays();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h3>
        <p className="text-gray-600">Choose your preferred consultation schedule</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Select Date
            </h4>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-medium text-gray-900 min-w-[120px] text-center">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
              const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
              const isAvailable = isDateAvailable(date);
              const isSelected = selectedDateObj && 
                date.toDateString() === selectedDateObj.toDateString();

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  disabled={!isAvailable}
                  className={`
                    h-10 w-10 text-sm rounded-lg transition-all duration-200
                    ${!isCurrentMonth ? 'text-gray-300' : ''}
                    ${!isAvailable ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-50'}
                    ${isSelected ? 'bg-blue-600 text-white' : ''}
                    ${isAvailable && !isSelected ? 'text-gray-700' : ''}
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {selectedDateObj && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Selected:</strong> {formatDate(selectedDateObj)}
              </p>
            </div>
          )}
        </div>

        {/* Time Slots */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Available Times
          </h4>

          {!selectedDateObj ? (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Please select a date first</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    p-3 text-sm font-medium rounded-lg border transition-all duration-200
                    ${selectedTime === time
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          {selectedTime && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Duration:</strong> {duration} minutes
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Business Hours Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-900 mb-2">Business Hours</h5>
        <p className="text-sm text-gray-600">
          Consultations are available Monday through Friday, {BUSINESS_HOURS.startTime} - {BUSINESS_HOURS.endTime} UTC.
          All times are displayed in your local timezone.
        </p>
      </div>
    </div>
  );
};

export default DateTimeSelection;
