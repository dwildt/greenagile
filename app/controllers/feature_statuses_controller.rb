class FeatureStatusesController < ApplicationController
  # GET /feature_statuses
  # GET /feature_statuses.xml
  def index
    @feature_statuses = FeatureStatus.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @feature_statuses }
    end
  end

  # GET /feature_statuses/1
  # GET /feature_statuses/1.xml
  def show
    @feature_status = FeatureStatus.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @feature_status }
    end
  end

  # GET /feature_statuses/new
  # GET /feature_statuses/new.xml
  def new
    @feature_status = FeatureStatus.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @feature_status }
    end
  end

  # GET /feature_statuses/1/edit
  def edit
    @feature_status = FeatureStatus.find(params[:id])
  end

  # POST /feature_statuses
  # POST /feature_statuses.xml
  def create
    @feature_status = FeatureStatus.new(params[:feature_status])

    respond_to do |format|
      if @feature_status.save
        flash[:notice] = 'FeatureStatus was successfully created.'
        format.html { redirect_to(@feature_status) }
        format.xml  { render :xml => @feature_status, :status => :created, :location => @feature_status }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @feature_status.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /feature_statuses/1
  # PUT /feature_statuses/1.xml
  def update
    @feature_status = FeatureStatus.find(params[:id])

    respond_to do |format|
      if @feature_status.update_attributes(params[:feature_status])
        flash[:notice] = 'FeatureStatus was successfully updated.'
        format.html { redirect_to(@feature_status) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @feature_status.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /feature_statuses/1
  # DELETE /feature_statuses/1.xml
  def destroy
    @feature_status = FeatureStatus.find(params[:id])
    @feature_status.destroy

    respond_to do |format|
      format.html { redirect_to(feature_statuses_url) }
      format.xml  { head :ok }
    end
  end
end
