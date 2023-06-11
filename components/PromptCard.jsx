"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter} from 'next/navigation';


const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image 
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
        {/* <div className='flex flex-col'>
          <h3>{post.creator.username}</h3>
          <p>{post.creator.email}</p>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default PromptCard


// Summer 2023 | Course-SEE 341
// Sterling Carfrae, 301398263
// SEE 341: Lab 1 Report
// Table of Contents
// 1.1
// 1.2
// 1.3
// 1.4
// 1.5
// 1.6
// 1.7
// 1.8
// 1.1
// Question: Consider the given analog signal: 
// Comments: 
// Your comments on the signal, arguments or steps of coding it (if any)
// %Define time range and frequency
// f1 = 10; %frequency in Hz (snake syntax)
// t1= -1:.01:1; %time intervel between timespace

// %Signal function
// x1 = sin(2*pi*f1*t1);

// %Figure and plotted signal 
// figure("Name",'Question 1')
// plot(t1,x1, 'LineWidth', 1.5)
// xlabel("Time(s)")
// ylabel('Analog Signal')
// title('Q1.1:x1 = sin(2\pi* f1 *t1)')
// grid on
// grid minor
// 1.2
// %description of problem:

// %Define frequency and time range
// %use semicolins to control output
// f2 = 10; %frequency in Hz (snake syntax)
// t2= 0:.01:10; %time intervel between timespace

// %calculate signal
// x2 = exp(-t2).*cos(2*pi*f2*t2)+exp(-t2/2).*cos(2*pi*f2/2*t2);

// figure("Name",'Question 2')
// plot(t2,x2,'LineWidth', 1.5)
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.2: x2 = exp(-t2).*cos(2*pi*f2*t2)+exp(-t2/2).*cos(2*pi*f2/2*t2)')
// grid on
// grid minor

// output commentary
// 1.3
// %Define frequency and time range
// t3 = -1:0.01:10; %assumption
// %Define init. signal vector
// x3 = zeros(size(t3));
// %Define piecewise function, function(param) = piecewise(conditionals,
// %values)
// %x(t) = piecewise(cond1, val1, 

// %define symbolic function function funct_name(param)
// syms x3(t3);
// x3(t3) = piecewise(-1<=t3<0, 3*t3+3, 0<=t3<2, -7*t3/2+3, 2<=t3<10, t3/2-5, 0);

// figure("Name",'Question 3')
// fplot(x3,[-5, 15],'LineWidth', 1.5) %only see within this window
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.3:')
// grid on
// grid minor
// 1.4
// %Define sample frequency and range

// f4s = 100; %sample frequency (width)
// f4 = 5; %frequency

// T4s = 1/f4s; %period sampling freq (width)
// n4s = 0:50; % points in sampling freq
// t4 = n4s*T4s; %number samples

// %sample signal values
// x4 = cos(2*pi*f4*t4);

// figure("Name",'Question 4')
// stem(n4s, x4, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.4')
// grid on
// grid minor
// 1.5

// %define symbolic function function funct_name(param)
// syms x5(i5);
// t5(i5) = piecewise(-2<=i5<=-1, -1, 1<=i5<=2, 1, 0); %intermediate 

// n5 = -10:10;
// x5=t5(n5);
// figure("Name",'Question 5')
// stem(n5, x5, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.5')
// grid on
// grid minor
// 1.6
// %Define frequency and time range
// t3 = -1:0.01:10; %assumption
// %Define init. signal vector
// x3 = zeros(size(t3));
// %Define piecewise function, function(param) = piecewise(conditionals,
// %values)
// %x(t) = piecewise(cond1, val1, 

// %define symbolic function function funct_name(param)
// syms x3(t3);
// x3(t3) = piecewise(-1<=t3<0, 3*t3+3, 0<=t3<2, -7*t3/2+3, 2<=t3<10, t3/2-5, 0);
// x6a = 2*x3(-t3);
// x6b = 0.5*x3(2*t3-1);
// x6c = 3*x3(-3*t3+2);
// x6d = x3*((t3-1)/2);



// figure("Name",'Question 6')
// fplot(x6a,[-15, 15],'LineWidth', 1.5) %only see within this window
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.6a:')
// grid on
// grid minor

// fplot(x6b,[-15, 15],'LineWidth', 1.5) %only see within this window
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.6b:')
// grid on
// grid minor

// fplot(x6c,[-15, 15],'LineWidth', 1.5) %only see within this window
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.6c:')
// grid on
// grid minor

// fplot(x6d,[-15, 15],'LineWidth', 1.5) %only see within this window
// xlabel("Time(s)")
// ylabel('Signal')
// title('Q1.6d:')
// grid on
// grid minor
// 1.7
// %define symbolic function function funct_name(param)
// syms x5(i5);

// t5(i5) = piecewise(-2<=i5<=-1, -1, 1<=i5<=2, 1, 0); %intermediate 
// n5 = -10:10;
// x5=t5(n5);

// %x5a = (3*x5)*(-(n5)+1)




// figure("Name",'Question 7')
// %part a
// stem(-n5+1,3*x5, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.7a')
// grid on
// grid minor

// %part b
// stem(3*n5-2,1.5*x5, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.7b')
// grid on
// grid minor

// %part c
// stem(-4*n5,x5, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.7c')
// grid on
// grid minor

// %part d
// stem(-n5-2,-2*x5, 'filled')
// xlabel("time(s)")
// ylabel('Signal')
// title('Q1.7d')
// grid on
// grid minor
// 1.8
// %continous time
// %Define frequency and time range
// t8 = -10:1:10; %Assumption

// figure("Name",'Question 8')'
// % CONTINOUS UNIT-STEP 
// c1 = [zeros(1, 10), ones(1,1), zeros(1,10)];
// subplot(2,3,1);
// plot(t8,c1)
// title("CONTINUOUS UNIT IMPULSE")
// xlabel("time");
// ylabel("amplitude");

// % DISCRETE IMPULSE 
// d1 = [zeros(1,10), ones(1), zeros(1,10)];
// subplot(2,3,2) %create first subplot
// set(gca, 'Position', [1, 1, 1, 1]);
// stem(t8, c1)
// title("DISCRETE UNIT IMPULSE");
// xlabel("sample impulse");
// ylabel("amplitude");
// grid on;
// grid minor;

// % CONTINOUS UNIT-STEP
// % impulse = t8==0;
// % unitstep = t8>=0;
// % ramp = t8.*unitstep;
// % figure("Name",'Question 8')
// % plot(t8, impulse, unitstep, ramp);
// % xlabel("time(s)")
// % ylabel('Signal')
// % title('Q1.8')
// % grid on
// % grid minor