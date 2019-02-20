Search.setIndex({docnames:["api","examples/ase_interface","examples/cache_aev","examples/energy_force","examples/index","examples/load_from_neurochem","examples/neurochem_trainer","examples/nnp_training","index","start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api.rst","examples/ase_interface.rst","examples/cache_aev.rst","examples/energy_force.rst","examples/index.rst","examples/load_from_neurochem.rst","examples/neurochem_trainer.rst","examples/nnp_training.rst","index.rst","start.rst"],objects:{"":{torchani:[8,0,0,"-"]},"torchani.AEVComputer":{aev_length:[0,2,1,""],angular_length:[0,2,1,""],angular_sublength:[0,2,1,""],forward:[0,2,1,""],neighborlist:[0,3,1,""],radial_length:[0,2,1,""],radial_sublength:[0,2,1,""]},"torchani.EnergyShifter":{forward:[0,2,1,""],sae:[0,2,1,""],subtract_from_dataset:[0,2,1,""]},"torchani.ase":{Calculator:[0,1,1,""],NeighborList:[0,1,1,""]},"torchani.data":{AEVCacheLoader:[0,1,1,""],BatchedANIDataset:[0,1,1,""],cache_aev:[0,0,0,"-"]},"torchani.ignite":{Container:[0,1,1,""],DictLoss:[0,1,1,""],DictMetric:[0,1,1,""],MAEMetric:[0,4,1,""],MSELoss:[0,4,1,""],PerAtomDictLoss:[0,1,1,""],RMSEMetric:[0,4,1,""],TransformedLoss:[0,1,1,""]},"torchani.ignite.Container":{forward:[0,2,1,""]},"torchani.models":{ANI1ccx:[0,1,1,""],ANI1x:[0,1,1,""]},"torchani.neurochem":{Builtins:[0,1,1,""],Constants:[0,1,1,""],Trainer:[0,1,1,""],load_atomic_network:[0,4,1,""],load_model:[0,4,1,""],load_model_ensemble:[0,4,1,""],load_sae:[0,4,1,""],trainer:[0,0,0,"-"]},"torchani.neurochem.Builtins":{aev_computer:[0,3,1,""],const_file:[0,3,1,""],consts:[0,3,1,""],energy_shifter:[0,3,1,""],ensemble_prefix:[0,3,1,""],ensemble_size:[0,3,1,""],models:[0,3,1,""],sae_file:[0,3,1,""]},"torchani.neurochem.Constants":{species_to_tensor:[0,3,1,""]},"torchani.neurochem.Trainer":{evaluate:[0,2,1,""],load_data:[0,2,1,""],run:[0,2,1,""]},"torchani.nn":{Gaussian:[0,1,1,""]},"torchani.utils":{ChemicalSymbolsToInts:[0,1,1,""],pad:[0,4,1,""],pad_coordinates:[0,4,1,""],present_species:[0,4,1,""],strip_redundant_padding:[0,4,1,""]},torchani:{AEVComputer:[0,1,1,""],ANIModel:[0,1,1,""],EnergyShifter:[0,1,1,""],Ensemble:[0,1,1,""],ase:[0,0,0,"-"],data:[0,0,0,"-"],ignite:[0,0,0,"-"],models:[0,0,0,"-"],neurochem:[0,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"000ev":1,"00s":6,"013ev":1,"018ev":1,"01s":6,"020ev":1,"024ev":1,"028ev":1,"02s":6,"031ev":1,"035ev":1,"037ev":1,"03s":6,"043ev":1,"04s":6,"05s":6,"06s":6,"07s":6,"08s":6,"09s":6,"0fk":1,"0x7ff4a92890f0":5,"104k":1,"10s":6,"11s":6,"12s":6,"136k":1,"13s":6,"142k":1,"14s":6,"157k":1,"16s":6,"189k":1,"1ccx":[0,3,8],"1ccx_8x":0,"1x_8x":[0,2,5,7],"20it":6,"213k":1,"21s":6,"22s":6,"23it":6,"23s":6,"242k":1,"24it":6,"24s":6,"25it":6,"25s":6,"26it":6,"26s":6,"270k":1,"27it":6,"27s":6,"285k":1,"28it":6,"28s":6,"29it":6,"29s":6,"2r_16":[2,5,7],"300k":1,"30it":6,"30s":6,"31it":6,"31s":6,"32it":6,"32s":6,"330k":1,"33it":6,"33s":6,"34it":6,"34s":6,"35s":6,"36s":6,"37s":6,"38s":6,"39s":6,"3fev":1,"40s":6,"41s":6,"42s":6,"44s":6,"45s":6,"46s":6,"47s":6,"48s":6,"49s":6,"50s":6,"51s":6,"52s":6,"53s":6,"54s":6,"55s":6,"56s":6,"57s":6,"58s":6,"59s":6,"5a_a4":[2,5,7],"60s":6,"61s":6,"62s":6,"63s":6,"64s":6,"65s":6,"72s":6,"821ev":1,"827ev":1,"832ev":1,"842ev":1,"845ev":1,"846ev":1,"850ev":1,"853ev":1,"855ev":1,"860ev":1,"862ev":1,"863ev":1,"868ev":1,"871ev":1,"874ev":1,"876ev":1,"879ev":1,"883ev":1,"88s":6,"89s":6,"903ev":1,"90s":6,"91s":6,"92s":6,"93s":6,"94s":6,"95s":6,"96s":6,"97s":6,"98s":6,"99s":6,"case":0,"class":[0,8],"const":[0,5,7],"default":0,"final":[5,7],"float":0,"function":[0,1],"import":[1,2,3,5,6,7,8],"int":0,"long":0,"public":0,"return":[0,2,6,7],"true":[0,1,2,3,5,6,7],"try":[2,5,6,7],ASE:[4,5,8],And:[3,5,7],But:[6,7],For:[0,6],R_s:0,The:[0,2,3,7],There:6,These:[0,3,7],Use:[0,4,6,8],Using:[4,8],__file__:[2,5,6,7],_default_neighborlist:0,_hl:6,abc:0,abl:6,absolut:0,accord:0,activ:0,actual:2,adam:[2,7],add:[2,7],add_scalar:[2,7],added:0,adding:[0,7],aev:[0,4,5,7,8],aev_cach:0,aev_comput:[0,5,7],aev_length:0,aevcacheload:[0,2],aevcomput:[0,5,7,8],after:[0,9],again:[2,6],algorithm:1,all:[0,4,7],all_speci:0,allow:[6,7],along:0,alpha:[2,5,7],alreadi:[0,2],also:[0,2,5,6,7,8,9],altern:[5,6],alwai:[0,3],amount:0,angular:0,angular_length:0,angular_sublength:0,ani1ccx:[0,1,3],ani1x:0,ani:[0,2,3,5,6,7,8],ani_gdb_s01:[2,6,7],animodel:[0,2,5,7,8],api:[0,8],appli:0,applic:3,appropri:0,arg:6,argument:[0,7],ase:[0,1,5],ase_interfac:1,associ:0,assum:[2,6,7,9],atom:[0,1,2,3,5,7],attach:[1,2,7],autograd:[3,5],automat:[0,7],averag:[0,3],avoid:[0,6,7],bar:[2,7],batch:[0,2,3,7],batch_siz:[0,2,7],batchedanidataset:[0,2,7],becaus:[2,6,7],been:[2,6],befor:[0,6,7],begin:[0,1,3,5,6,7],below:0,benefici:2,besid:0,bfg:1,bia:[2,5,7],bool:0,boost:[4,8],both:[6,7],bparam:0,build:0,built:[0,3],builtin:[0,1,3],cach:[0,4,8],cache_aev:[0,2],calcul:[0,1,5],calculator1:5,calculator2:5,call:0,callabl:0,callback:1,caller:0,can:[0,3,5,6,7,8,9],captur:6,caus:9,cell:[0,1],celu:[2,5,7],cfg_path:6,chang:[0,2],check:[2,7],checkpoint:[0,2,7],checkpoint_nam:0,chemic:[0,7],chemicalsymbolstoint:0,chhhh:[0,3,5],chosen:0,chunk:[0,7],click:[1,2,3,5,6,7],cmd:6,code:[1,2,3,4,5,6,7],coeffici:1,collect:0,combin:7,command:[6,9],comput:[0,2,4,5,7,8],concat:7,concaten:0,conda:9,config:6,configur:0,conform:0,const_fil:[0,2,5,7],constant:[0,4,5,7,8],construct:[2,4,7,8],consum:0,contain:[0,2,3,7,8],contrib:[2,7],convent:0,convert:[0,7],coordin:[0,3,5,7,8],copi:2,correct:[0,9],correspoindingli:0,correspond:[0,7],could:0,count:0,cpu:[0,2,3,6,7],creat:[0,1,5,7,8],create_supervised_evalu:[2,7],create_supervised_train:[2,7],crystal:1,cu100:9,cubic:1,cuda10:9,cuda:[0,2,6,7],current:0,cutoff:0,dat:[2,5,7],data:[0,2,7,8],dataset:[2,6,7,8],deal:[7,8],decod:6,def:[1,2,6,7],default_neighborlist:0,default_tim:[2,7],defin:[0,2,3,5,7],demo:[6,7],depend:9,deprec:6,deriv:[3,5],design:0,detach:5,devic:[0,2,3,6,7],device_str:6,diamond:1,dictionari:[0,7],dictloss:0,dictmetr:0,differ:[0,3,7],diffrent:3,dim:0,dir:[0,2],dir_:0,directli:[0,2,3,5,6,7],directori:[0,2,6,7],dirnam:[2,5,6,7],disabl:0,disk:[0,4,8],disk_cach:0,distanc:0,distinguish:0,divid:0,docstr:0,document:6,doe:[2,7],don:2,download:[1,2,3,4,5,6,7,9],dtype:0,dump:0,dure:[0,2],dyn:1,dynam:1,e402:6,e501:[2,5,7],each:[0,7],easi:6,easili:7,effect:0,effici:2,either:5,ekin:1,elaps:[2,7],element:0,els:[2,6,7],enabl:0,energi:[0,1,2,4,5,7,8],energy_forc:3,energy_shift:[0,5,7],energyshift:[0,5,8],engin:[2,7],enough:0,ensembl:[0,3,5],ensemble_prefix:0,ensemble_s:0,epoch:[2,6,7],epoch_start:[2,7],epot:1,equat:0,equival:6,error:0,especi:0,eta:0,etaa:0,etar:0,etc:[7,8],etot:1,evalu:[0,2,7],event:[2,7],everi:[2,7],everyth:[0,6],everytim:[0,2],exampl:[0,1,2,3,5,6,7,8],examples_jupyt:4,examples_python:4,except:[2,5,6,7],exclud:0,exist:[2,7],explain:0,extend:7,factori:0,fals:0,fast:0,file:[0,2,4,7,8],filenam:0,fill:0,finish:[6,7],first:[0,1,3,5,6,7],fit:0,float32:0,fmax:1,follow:[6,7,9],forc:[4,5,7,8],form:0,format:[0,8],forward:0,friction:1,from:[0,1,2,4,7,8],full:[0,1,2,3,5,6,7],funcit:[2,7],further:[0,7],futur:7,galleri:[1,2,3,4,5,6,7],gaussian:0,gener:[1,2,3,4,5,6,7],get:[0,6,7,8],get_forc:5,get_kinetic_energi:1,get_potential_energi:[1,5],getcwd:[2,5,6,7],ghost:[0,7],github:0,give:[2,7],given:0,good:[0,2],grad:[3,5],group:8,h5py:6,h5pydeprecationwarn:6,hack:6,handler:[2,7],happen:7,hard:0,hartre:5,hartree2kc:[2,7],has:[0,2,3,6],have:[0,3,7],hdd:0,hdf5:0,help:[0,6,8],helper:8,here:[0,1,2,3,5,6,7],heurist:0,high:0,hold:7,home:[1,6],hostedtoolcach:6,how:[0,2,5,6,7],html:9,http:9,huge:[0,2,7],hyperparamet:[0,7],ignit:[2,7,8],ignor:[0,7],illustr:5,implement:8,imposs:0,improv:[2,7],in_featur:[2,5,7],includ:[2,8],inconveni:0,index:8,inf:0,initi:[0,3],input:[0,4,7,8],inputtrain:6,insid:[4,8],instal:8,instanc:0,instead:[2,6,9],instruct:9,integ:0,interest:1,interfac:[4,5,8],intern:0,interv:1,invok:[0,6],ipt:6,ipynb:[1,2,3,5,6,7],is_avail:[2,6,7],isfil:[2,7],issu:[0,3,9],item:[3,5],iter:[0,2,7],iteration_complet:[2,7],its:[0,6],join:[2,5,6,7],jupyt:[1,2,3,4,5,6,7],just:[3,6],kei:0,kinet:1,kwarg:6,langevin:1,largest:0,latest:9,lattic:1,lead:0,learn:0,len:1,length:0,let:[1,2,3,5,6,7],level:0,lib:6,librari:0,like:[0,3,8],line:[2,6],linear:[2,5,7],list:[0,7],load:[0,2,3,5,7],load_atomic_network:0,load_data:[0,6],load_from_neurochem:5,load_model:[0,5],load_model_ensembl:[0,5],load_sa:[0,5,7],load_state_dict:[2,7],loader:2,log:[0,2,7],log_dir:[2,7],log_loss:[2,7],log_tim:[2,7],loss:[0,2,7],loss_vs_iter:[2,7],mae:0,maemetr:0,mai:9,maintain:8,make:[0,3,6,7],manual:[2,3,5,6,7],map:0,math:0,max:[0,2,7],max_epoch:[2,7],maximum:0,mean:0,memori:7,methan:5,method:0,metric:[0,2,7],might:0,min:0,minibatch:[0,7],minim:[0,4,7,8],minut:[1,2,3,5,6,7],mistakenli:9,model0:0,model:[1,2,4,7,8],model_checkpoint:[2,7],model_dir:5,model_prefix:5,modifi:1,modul:[0,1,3,5,6,7,8],moduledict:0,molecul:[0,3,5,7,8],molecular:[0,8],more:8,most:[0,2],mse:0,mseloss:[0,2,7],must:0,my_tqdm:6,name:[0,2,7,9],nameerror:[2,5,6,7],necessari:7,need:[0,2,3,6,7,9],neighbor:0,neighborlist:0,neighborlist_comput:0,network:[0,2,4,5,8],neural:[0,2,4,5,8],neurochem:[3,4,7,8],neurochem_train:6,never:[0,2],nightli:9,nnf:0,nnp1:5,nnp2:5,nnp_train:7,none:0,noqa:[2,5,6,7],normal:7,note:[6,7],notebook:[1,2,3,4,5,6,7],now:[1,3,5,6,7],num_speci:0,number:[0,3,7],numpi:[5,9],object:[0,2,5],obtain:0,offici:[1,9],onc:6,one:2,onli:0,oper:0,opt:[1,6],optim:[1,2,7],option:0,order:[0,6],org:9,origin:0,otherwis:0,our:[2,6,7],out:[1,2,3,5,6,7],out_featur:[2,5,7],outperform:3,output:[0,2,6,7],overcom:0,overfit:[2,7],own:[2,4,8],packag:[6,9],pad:[0,7],pad_coordin:0,padding_fil:0,page:[1,8],pair:[0,7],paper:0,param:[2,5,7],paramet:[0,2,7],part:[0,2],particip:0,path:[0,2,5,6,7],pbar:[2,7],pbc:[0,1],per:[1,7],per_atom:0,peratomdictloss:0,physic:1,pip:9,pipe:6,pipelin:[0,2,5,7,8],pleas:9,point:0,popen:6,posit:5,potenti:[0,1,2,4,8],preced:3,precomput:0,predict:3,prefix:0,present:0,present_speci:0,preview:9,previou:[2,7],print:[1,2,3,5,6,7],printenergi:1,process:3,program:[0,6,7],progress:[2,7],progressbar:[2,6,7],properti:[0,7],purpos:[6,7],put:0,pyanitool:0,python3:6,python:[0,1,2,3,4,5,6,7],pytorch:[7,8,9],quantiti:1,quick:[6,7],r_c:0,radial:0,radial_length:0,radial_sublength:0,rang:[2,7],rather:0,raw:5,rca:0,rcr:0,read:[5,6,7],readi:7,realpath:[2,5,6,7],reason:7,recogn:9,recommend:3,redirect:6,reduc:0,redund:0,refer:0,rel:0,repositori:[6,7],requir:[0,7,9],requires_grad:[3,5],resourc:[2,5,7],rest:2,result:[0,3],rhcno:[2,5,7],rmse:[0,2,7],rmsemetr:[0,2,7],roitberg:8,round:[2,7],run:[0,1,2,3,5,6,7],sae:0,sae_fil:[0,2,5,7],sae_linfit:[2,5,7],same:[0,2,5,7],save:[2,7],scale:0,scratch:0,script:[1,2,3,5,6,7],search:8,second:[0,1,2,3,5,6,7],see:[0,2,3,6,7,9],self:[0,5,7],self_energi:0,sequenc:0,sequenti:[0,2,5,7],seriou:[6,7],set:[0,1,2,6,7],set_calcul:[1,5],setup:[6,7],shape:[0,3,7],share:0,shfa:0,shfr:0,shfz:0,shifter:[0,2,5],ship:3,should:[0,6,7],show:[2,6,7],shuffl:[0,7],signatur:0,similar:[0,7],simpli:0,simplifi:6,sinc:[0,2,7],singl:[0,3,5,7],site:[6,9],size:[0,2,7],skip:2,small:[6,7],solv:0,some:[0,6,7],sort:0,sourc:[0,1,2,3,4,5,6,7],speci:[0,3,5,7],species_coordin:[0,7],species_energi:0,species_tensor_convert:0,species_to_tensor:[0,3,5,7],species_x:0,specifi:[0,3],speed:3,sphinx:[1,2,3,4,5,6,7],split:[0,7],squeez:[3,5],ssd:[0,2],start:[2,7,8],state:[2,7],state_dict:[2,7],stderr:6,stdout:6,step:[1,2,7],storag:0,store:0,str:0,string:[0,7],strip:0,strip_redundant_pad:0,structur:[0,3,4,7,8],subaev:0,subclass:0,subprocess:6,subtract:[0,7],subtract_from_dataset:[0,7],successfulli:[6,7],suffix:0,sum:[0,3,5],summarywrit:[2,7],support:[0,3,7],symbol:[0,1,7],sys:6,system:[6,7],take:0,temperatur:[4,8],tensor:[0,3,5,7],tensorboard:[0,6],tensorboardx:[0,2,7],test:6,test_data:6,than:0,thei:7,them:7,theta_:0,thi:[0,1,2,3,5,6,7],thing:5,those:0,through:9,time:[0,1,2,3,5,6,7],time_vs_epoch:[2,7],timeit:[2,7],togeth:0,tool:[0,7,8],torch:[0,2,3,5,6,7,9],torch_nightli:9,torchani:[1,2,3,5,6,7,9],torchvision_nightli:9,total:[0,1,2,3,5,6,7],tqdm:[0,6],trail:0,train0:5,train:[0,3,4,5,8],trainer:[0,2,6,7],training_cach:2,training_path:[0,2,6,7],training_rmse_everi:[2,7],training_rmse_vs_epoch:[2,7],transfer:0,transform:[0,7],transformedloss:0,tupl:0,tutori:5,two:0,type:[0,7],unchang:0,under:[6,7],uniqu:0,unit:[1,5],unless:3,unsqueez:[3,5],updat:9,upgrad:9,usag:6,use:[0,1,2,3,5,6,7],used:[0,3,7],user:[6,7],using:[0,3,4,5,6,8],usual:[0,2,7],utf:6,util:8,valid:[0,2,6,7],validation_and_checkpoint:[2,7],validation_cach:2,validation_path:[0,2,6,7],validation_rmse_vs_epoch:[2,7],valu:[0,6],variou:8,vector:0,veri:[0,2,6,7],version:9,vst:6,wai:7,want:[1,3],wast:[0,7],were:7,what:6,when:[0,2,6,7,9],where:[0,3,7],whether:0,which:[0,7,9],whl:9,whole:[0,5,7],wide:7,work:[0,6,7,8],worri:7,would:[0,2,7,9],wparam:0,wrap:0,writer:[2,7],wrong:[6,7],x64:6,yield:0,you:[0,3,5,6,7,9],your:[2,3,4,6,8,9],zeta:0,zip:4,zoo:[4,8]},titles:["TorchANI","Structure minimization and constant temperature MD using ASE interface","Use Disk Cache of AEV to Boost Training","Computing Energy and Force Using Models Inside Model Zoo","Examples","Construct Model From NeuroChem Files","Train Neural Network Potential From NeuroChem Input File","Train Your Own Neural Network Potential","Welcome to TorchANI\u2019s documentation!","Installation"],titleterms:{ASE:[0,1],Use:2,Using:3,aev:2,boost:2,cach:2,comput:3,constant:1,construct:5,dataset:0,disk:2,document:8,energi:3,exampl:4,file:[5,6],forc:3,from:[5,6],helper:0,ignit:0,indic:8,input:6,insid:3,instal:9,interfac:[0,1],minim:1,model:[0,3,5],network:[6,7],neural:[6,7],neurochem:[0,5,6],own:7,potenti:[6,7],structur:1,tabl:8,temperatur:1,torchani:[0,8],train:[2,6,7],using:1,util:0,welcom:8,your:7,zoo:[0,3]}})