ifndef u
u:=sotatek
prj:=react-test-aws
endif

deploy:
deploy:
		ssh $(u)@$(h) "rm -rf $(prj)/*"
		rsync -a deploy.json build $(u)@$(h):$(dir) 

		ssh $(u)@$(h) "pm2 start $(prj)/deploy.json"

deploy-dev:
		make deploy h=192.168.1.235 dir=/home/sotatek/$(prj)