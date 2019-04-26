#!/bin/bash
# Program:
#	mkdir with variable
# History:
# 2019/4/18  George  First release

echo -n "let's create js files!"
for (( c=1; c<= $1; c++ ))
do
	touch $c.js
done
